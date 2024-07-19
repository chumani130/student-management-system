import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminParentGuardianComponent } from './admin/admin-parent-guardian/admin-parent-guardian.component';
import { UserParentGuardianComponent } from './user/user-parent-guardian/user-parent-guardian.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    { path: 'admin', component: AdminDashboardComponent, canActivate: [adminGuard],
        children: [
            {path: 'admin-parent-guardian', component: AdminParentGuardianComponent},
        ]
    },
    { path: 'user', component: UserDashboardComponent, canActivate: [userGuard]
        children: [
            {path: 'user-parent-guardian', component: UserParentGuardianComponent}

        ]
    }
];
