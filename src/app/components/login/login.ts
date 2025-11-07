import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(private userService: UserService, private router: Router) {}

  loginUser(): void {
    const { email, password } = this.loginData;

    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    this.userService.login(this.loginData).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        alert('✅ Login successful!');
        this.router.navigate(['/booking']);
      },
      error: (err: any) => {
        console.error(err);
        alert(err?.error?.message || 'Invalid credentials.');
      },
    });
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
