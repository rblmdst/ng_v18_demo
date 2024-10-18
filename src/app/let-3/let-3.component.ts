import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { of, tap } from 'rxjs';

const users = [
  { id: 1, name: 'Obito' },
  { id: 9, name: 'Heruzen' },
  { id: 4, name: 'Tobirama' },
];
@Component({
  selector: 'app-let-3',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './let-3.component.html',
})
export class Let3Component {
  // to simulate HTTP call
  // userList$ = this.http.get('http://localhost:3000/users');
  userList$ = of(users).pipe(tap(console.log));
}
