import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent, IntroSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
