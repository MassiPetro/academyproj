import { Pipe, PipeTransform } from '@angular/core';

/** 
 * The placeholder can be passed as argument
 * 
 * How to use: value | my : placeholder
 * 
 * Example: {{'hello' | my : 'x'}} -> 'xxxxx'
 * */ 

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform(value: string, placeholder?: string): string {
    let result: string = placeholder ? placeholder : "*";
    
    return result.repeat(value.length);
  }

}
