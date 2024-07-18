import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    { path: '', component: LayoutComponent,
        children: [
            {path: 'dashboard-admin', component: DashboardAdminComponent},
            {path: 'dashboard-student', component: DashboardStudentComponent}

        ]
    }
];
