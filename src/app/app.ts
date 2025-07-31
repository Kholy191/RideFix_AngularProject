import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './Components/nav-bar-component/nav-bar-component';
import { FooterComponent } from './Components/footer-component/footer-component';
import { UserStorageService } from './Services/UserStorageService/user-storage-service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    NavBarComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit{
  protected title = 'RideFix';
    userRole: string | null = null;

  constructor(private userStorage: UserStorageService) {}

  ngOnInit() {
    this.userRole = this.userStorage.getUserRole();
  }
}
