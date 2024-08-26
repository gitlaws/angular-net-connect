import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { IntroComponent } from './intro/intro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent, IntroComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
