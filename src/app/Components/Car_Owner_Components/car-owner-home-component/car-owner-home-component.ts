import { IRequestBrief } from './../../../Interfaces/irequest-brief';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RequestAlertComponent } from '../request-alert-component/request-alert-component';
import { RequestService } from '../../../Services/RequestService/request-service';

@Component({
  selector: 'app-car-owner-home-component',
  imports: [
    RouterLink,
    RequestAlertComponent,
  ],
  templateUrl: './car-owner-home-component.html',
  styleUrl: './car-owner-home-component.css',
  encapsulation: ViewEncapsulation.None, // ✨ الحل هنا
})
export class CarOwnerHomeComponent implements OnInit {
  alertFlag: boolean = false;
  requestService = inject(RequestService);
  ngOnInit(): void {
    this.requestService.getRequestBrief(1).subscribe({
      next: (res) => {
        this.requestService.setAlertRequest(res.data);
        this.alertFlag = true;
        localStorage.setItem('CurrentRequestId', res.data.id.toString());
      },
      error: () => {
        this.alertFlag = false;
      },
    });
  }
}
