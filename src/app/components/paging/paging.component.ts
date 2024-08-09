import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paging',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
})
export class PagingComponent implements OnInit {
  @Input() pageSize: number = 10;
  @Input() totalItems: number = 0;
  @Input() currentPage: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  isLoading = false;
  images: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchImages();
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && this.currentPage !== page) {
      this.isLoading = true;
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
      this.fetchImages();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  fetchImages(): void {
    const apiUrl = `https://picsum.photos/v2/list?page=${this.currentPage}&limit=${this.pageSize}`;
    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.images = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching images from Lorem Picsum:', error);
        this.isLoading = false;
      }
    );
  }
}
