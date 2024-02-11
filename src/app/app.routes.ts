import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

export const routes: Routes = [
     {path: '', component: WelcomeComponent},
     {path: 'sign-up', component: SignUpComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

