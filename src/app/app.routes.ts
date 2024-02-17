import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { MenuplanComponent } from './component/menuplan/menuplan.component';

export const routes: Routes = [
     {path: '', component: WelcomeComponent},
     {path: 'sign-up', component: SignUpComponent},
     {path: 'menuplan', component: MenuplanComponent}

];

