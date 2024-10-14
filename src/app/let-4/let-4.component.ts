import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-let-4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './let-4.component.html',
  styleUrl: './let-4.component.scss',
})
export class Let4Component {
  alertClass = model('info');

  response = signal({
    status: 200,
    data: [
      { name: 'Ali', level: 'Junior' },
      { name: 'Koffi', level: 'Senior' },
    ],
  });
}
