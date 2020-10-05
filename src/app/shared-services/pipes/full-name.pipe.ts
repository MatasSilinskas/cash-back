import { Pipe, PipeTransform } from '@angular/core';
import {IHuman} from '../user.interface';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: IHuman, ...args: unknown[]): unknown {
    return value.firstName + ' ' + value.lastName;
  }
}
