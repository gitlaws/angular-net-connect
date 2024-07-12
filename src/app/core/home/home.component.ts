import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title: string;
  constructor(private route: ActivatedRoute) {
    this.title = this.route.snapshot.data['title'];
    console.log('Navigated to Home component');
  }
}
