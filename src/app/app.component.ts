import { Component } from '@angular/core';
import { MyFormComponent } from './my-form/my-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
