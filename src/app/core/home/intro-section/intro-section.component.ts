import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.scss'],
  standalone: true,
  imports: [CommonModule, CarouselComponent],
})
export class IntroSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
