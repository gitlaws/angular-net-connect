import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DataItem {
  [key: string]: any; // Index signature to allow dynamic property access
  // Define other specific properties if needed
}

@Component({
  selector: 'app-simple-table',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent implements OnInit {
  data: DataItem[] = [];
  filteredData: DataItem[] = [];
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  searchQuery: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const apiKey = 'TQ7b0SzrZWTuxzQcOyBvYA2Bedgb22sykvF7WOGD';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`;

    this.http.get<DataItem[]>(apiUrl).subscribe((data) => {
      this.data = data;
      this.filteredData = data;
    });
  }

  sortData(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredData.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  filterData(): void {
    this.filteredData = this.data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    );
  }
}
