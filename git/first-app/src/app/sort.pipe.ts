import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: string, ord: string): string {
    let array = Array.from(value);
    let order: string = ord ? ord : 'asc';
    let result: string;

    if (order == 'asc') {
      result = (array.sort((a, b) => (a > b ? 1 : -1))).join('');
    } else if (order == 'des') {
      result = (array.sort((a, b) => (a < b ? 1 : -1))).join('');
    } else {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
  
        let t = array[i]; 
        array[i] = array[j]; 
        array[j] = t
      } 
      result = array.join('');  
    }
    
    
    return result;
  }

}
