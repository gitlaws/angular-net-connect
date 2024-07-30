import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  standalone: true,
  imports: [],
  templateUrl: './simple-table.component.html',
  styleUrl: './simple-table.component.scss',
})
export class SimpleTableComponent {
  @Input() public tableData: any[] = [
    { first: 'Stanislaw', last: 'Wasilewski', dob: '11/18/86' },
    { first: 'Stanislaw', last: 'Wasilewski', dob: '11/18/86' },
    { first: 'Stanislaw', last: 'Wasilewski', dob: '11/18/86' },
    { first: 'Stanislaw', last: 'Wasilewski', dob: '11/18/86' },
  ];

  @Output() public headerSelected = new EventEmitter<{
    key: string;
    value: any;
  }>();

  public headerSelection(key: string, value: any): void {
    this.headerSelected.emit({ value, key });
  }
}
