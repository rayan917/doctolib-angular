import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    
   }
   ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      confirmPassword: new FormControl('', Validators.required),
    }, { validators: this.checkPasswords });
  }

  private checkPasswords(control: FormGroup) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password?.value !== confirmPassword?.value ? { missMatch: true } : null;
  }

  addUser() {
    if (this.registerForm.invalid) return;
    this.authService.addPatient({
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    });
    this.router.navigate(['/login']);
  }

}
