import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface TextItem {
  id: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-paging',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
})
export class PagingComponent implements OnInit {
  items: TextItem[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  ngOnInit(): void {
    this.fetchData(this.currentPage);
  }

  async fetchData(page: number): Promise<void> {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${this.itemsPerPage}`;

    try {
      const response = await axios.get(apiUrl);
      this.items = response.data.map((item: any) => ({
        id: item.id,
        title: item.title,
        body: item.body,
      }));
      this.totalItems = parseInt(response.headers['x-total-count'], 10);
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
