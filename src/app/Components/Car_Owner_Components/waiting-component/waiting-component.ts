import {
  Component,
  inject,
  OnInit,
  ViewEncapsulation,
  OnDestroy,
} from '@angular/core';
import { NavBarComponent } from '../../nav-bar-component/nav-bar-component';
import { FooterComponent } from '../../footer-component/footer-component';
import { RequestService } from '../../../Services/RequestService/request-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RequestWatchDogHub } from '../../../Services/SignalRServices/RequestWatchDogHub/request-watch-dog-hub';

@Component({
  selector: 'app-waiting-component',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './waiting-component.html',
  styleUrl: './waiting-component.css',
  encapsulation: ViewEncapsulation.None, // ✨ الحل هنا
})
export class WaitingComponent implements OnInit, OnDestroy {
  requestService = inject(RequestService);
  routeService = inject(Router);
  watchDogService = inject(RequestWatchDogHub);
  cancelRequest() {
    this.requestService.CancelRequest(1).subscribe({
      next: (res) => {
        window.location.reload();
        this.routeService.navigateByUrl('/CarOwner/SelectTech');
      },
      error: (res) => {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'لقد حدث خطأ',
        });
      },
    });
  }
  ngOnInit(): void {
    this.watchDogService.startConnection(); // Need to be edited
    this.watchDogService.addreceivemessagelistener();
    this.watchDogService.printConnectionState();
  }

  ngOnDestroy(): void {
    this.watchDogService.stopConnection();
  }
}
