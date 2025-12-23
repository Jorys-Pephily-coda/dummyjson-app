import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'details/:id', component: DetailsComponent },
];
