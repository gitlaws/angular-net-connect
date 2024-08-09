import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface ImageItem {
  id: string;
  urls: {
    small: string;
  };
  description: string;
}

@Component({
  selector: 'app-paging',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
})
export class PagingComponent implements OnInit {
  items: ImageItem[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  ngOnInit(): void {
    this.fetchData(this.currentPage);
  }

  async fetchData(page: number): Promise<void> {
    const clientId = 'YOUR_UNSPLASH_ACCESS_KEY';
    const apiUrl = `https://api.unsplash.com/photos?page=${page}&per_page=${this.itemsPerPage}&client_id=${clientId}`;

    try {
      const response = await axios.get(apiUrl);
      this.items = response.data;
      this.totalItems = parseInt(response.headers['x-total']);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.fetchData(page);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }
}
