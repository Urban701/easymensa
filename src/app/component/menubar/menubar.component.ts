import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { WelcomeComponent } from '../../welcome/welcome.component'
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select"
import {MatAutocompleteModule} from "@angular/material/autocomplete"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatMenuModule} from "@angular/material/menu"
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import {MatBadgeModule} from "@angular/material/badge"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatListModule} from "@angular/material/list"
import {MatCardModule} from "@angular/material/card"
import {MatSliderModule} from "@angular/material/slider"
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDatepickerModule} from "@angular/material/datepicker"
import {MatNativeDateModule} from "@angular/material/core"
import {MatRadioModule} from "@angular/material/radio"
import {MatCheckboxModule} from "@angular/material/checkbox"
import {MatDialogModule} from "@angular/material/dialog"
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [RouterOutlet,
    WelcomeComponent,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    SignUpComponent,
  ],

  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})


export class MenubarComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

}
