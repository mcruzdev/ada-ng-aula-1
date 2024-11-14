import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ConfigComponent } from './home/config/config.component';
import { UsersComponent } from './home/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailsComponent } from './home/user-details/user-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ConfigComponent,
      },
      {
        path: 'config',
        component: ConfigComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'users/:userId',
        component: UserDetailsComponent
      }
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
