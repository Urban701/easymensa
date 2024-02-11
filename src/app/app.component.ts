import { Component } from '@angular/core';
import { MenubarComponent } from './component/menubar/menubar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenubarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'easymensa';
}
