import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { StorageService } from './servise/storage.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'student-management-system';

  isAdminLoggedIn: boolean = false;
  isUserLoggedIn : boolean = false;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.updateUserLoggedStatus();
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.updateUserLoggedStatus();
      }
    }
    )
  }
  private updateUserLoggedStatus(): void {
    this.isAdminLoggedIn = StorageService.isAdminLoggedIn();


  }
  logout() {
    StorageService.logout();
    this.router.navigateByUrl("/login")
  }

}
