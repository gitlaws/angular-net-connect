import { Component } from '@angular/core';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { CardComponent } from '../../components/card/card.component';
import { RouterLink } from '@angular/router';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

@Component({
  selector: 'app-service-documentation',
  standalone: true,
  imports: [CardComponent, RouterLink, SnackbarComponent],
  templateUrl: './service-documentation.component.html',
  styleUrls: ['./service-documentation.component.scss'],
})
export class ServiceDocumentationComponent {
  constructor(private snackbarService: SnackbarService) {}

  public callSnackbar(): void {
    this.snackbarService.callSnackbar('Snackbar Service Example');
  }
}
