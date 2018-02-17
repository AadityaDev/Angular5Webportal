import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'login', component: SigninComponent },
    { path: 'register', component: SignupComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);