import { Component } from '@angular/core';
import { Let1Component } from './let-1/let-1.component';
import { Let2Component } from './let-2/let-2.component';
import { Let3Component } from './let-3/let-3.component';
import { Let4Component } from './let-4/let-4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Let1Component, Let2Component, Let3Component, Let4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
