import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PhoneNumberPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'phoneNumber',
})
export class PhoneNumberPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    if (value != null) {
      let areaCode = value.slice(0, 3);
      let prefix = value.slice(3, 6);
      let suffix = value.slice(6, value.length);
      return `(${areaCode}) ${prefix}-${suffix}`;
    }
    return null;
  }
}
