import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss',
})
export class MyFormComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  // can be done using FormBuilder too
  usernameCtrl = new FormControl(null, Validators.required);
  passwordCtrl = new FormControl(null, Validators.required);

  form = new FormGroup({
    username: this.usernameCtrl,
    password: this.passwordCtrl,
  });

  ngOnInit(): void {
    this.usernameCtrl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        console.log('[valueChanges] ', event);
      });

    this.usernameCtrl.statusChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        console.log('[statusChanges] ', event);
      });
  }
}
