import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'value'
})
export class ValuePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    while (value.length < 3) {
      value = '0' + value;
    }

    return value.slice(0, value.length - 2) + ',' + value.slice(value.length - 2);
  }

}
