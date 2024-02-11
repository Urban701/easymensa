import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

export const routes: Routes = [
     {path: '', component: WelcomeComponent},
     {path: 'sign-up', component: SignUpComponent},

];

