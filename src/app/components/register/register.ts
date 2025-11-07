import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class RegisterComponent {
  registerData = { name: '', email: '', password: '' };

  constructor(private userService: UserService, private router: Router) {}

  registerUser(): void {
    const { name, email, password } = this.registerData;

    if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    this.userService.register(this.registerData).subscribe({
      next: () => {
        alert('🎉 Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert(err?.error?.message || 'Failed to register user');
      },
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
