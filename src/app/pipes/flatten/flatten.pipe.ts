import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
  standalone: true,
})
export class FlattenPipe implements PipeTransform {
  public transform(values: any[]): any[] {
    return this.flattenArray(values);
  }

  private flattenArray(arr: any[]): any[] {
    const result: any[] = [];
    arr.forEach((value) => {
      if (Array.isArray(value)) {
        result.push(...this.flattenArray(value));
      } else {
        result.push(value);
      }
    });
    return result;
  }
}
