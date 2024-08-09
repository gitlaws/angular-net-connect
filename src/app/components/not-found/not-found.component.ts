import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  private redirectCount = 10;
  private intervalId: any;
  private timerEnabled = false; // Flag to control the timer

  constructor(public router: Router) {}

  public get redirectMessage(): string {
    if (this.redirectCount <= 0) {
      return 'Redirecting ...';
    }

    return `Redirecting you to home page in ${this.redirectCount}.`;
  }

  public ngOnInit(): void {
    if (this.timerEnabled) {
      this.startTimer();
    }
  }

  private startTimer(): void {
    this.intervalId = setInterval(() => {
      this.redirectCount--;

      if (this.redirectCount <= 0) {
        clearInterval(this.intervalId);
        this.router.navigate(['']);
      }
    }, 1000);
  }

  public enableTimer(): void {
    this.timerEnabled = true;
    this.startTimer();
  }

  public redirectNow(): void {
    clearInterval(this.intervalId);
    this.router.navigate(['']);
  }
}
