import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterField'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchTerm: string): any[] {
    if (!searchTerm) {
      return value;
    }
  
    return value.filter(item => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
