import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const roles = [
  { name: 'QA Testing', id: 'b-005' },
  { name: 'UI/UX Designers', id: 'b-002' },
  { name: 'Business Analyst', id: 'b-003' },
  { name: 'Product Marketer', id: 'b-001' },
  { name: 'Dev Frontend', id: 'e-001' },
  { name: 'Dev Backend', id: 'e-002' },
  { name: 'Dev FullStack', id: 'e-003' },
  { name: 'Product Manager', id: 'b-000' },
  { name: 'Engineering management', id: 'e-000' },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `<h1>Home sweet home !!!</h1>
    <ul>
      @for (role of roles; track role.id) {
      <li>
        <a [routerLink]="['/team', role.id]">{{ role.name }}</a>
      </li>

      }
    </ul> `,
})
export class HomeComponent {
  roles = roles;
}
