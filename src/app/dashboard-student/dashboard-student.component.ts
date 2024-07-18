import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard-student',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-student.component.html',
  styleUrl: './dashboard-student.component.scss'
})
export class DashboardStudentComponent implements OnInit {

  userService = inject(UserService);
  dashboardStudents: any[]=[];
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getUsers().subscribe((res:any)=>{
      this.dashboardStudents = res.data;
    })

  }
}
