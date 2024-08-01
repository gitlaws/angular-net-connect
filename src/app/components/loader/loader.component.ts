import { Component, Input } from '@angular/core';
import { LoaderType } from './models/loader-type.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() public isLoading = false;
  @Input() public loaderType: LoaderType = LoaderType.Circular;
  public LoaderType = LoaderType;

  private loading = 'Loading';
  private loadingPeriods = '.\0\0';

  public get loadingText(): string {
    return `${this.loading}${this.loadingPeriods}`;
  }

  toggleLoader() {
    this.isLoading = !this.isLoading;
  }

  public ngOnInit(): void {
    if (this.loaderType === LoaderType.Loading) {
      this.updateLoaderPeriods();
    }
  }

  private updateLoaderPeriods() {
    let currentStep = 0;

    setInterval(() => {
      switch (currentStep % 3) {
        case 0:
          this.loadingPeriods = '..\0';
          currentStep++;
          break;
        case 1:
          this.loadingPeriods = '...';
          currentStep++;
          break;
        case 2:
          this.loadingPeriods = '.\0\0';
          currentStep = 0;
          break;
      }
    }, 500);
  }
}
