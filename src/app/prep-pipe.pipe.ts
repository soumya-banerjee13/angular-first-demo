import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prep'
})
export class PrepPipe implements PipeTransform {
doNotConvert = ['is', 'am', 'on', 'it'];
  convertUp(val: String): string {
    const firstLetter = val.substr(0, 1);
    const leftPart = val.substr(1, val.length);
    return firstLetter.toUpperCase().concat(leftPart.toLowerCase());
  }
  convertDown(val: string): string {
    return val.toLowerCase();
  }
  transform(value: any): string {
    const words = value.split(' ');
    let returnVal = '';
    for (let index = 0; index < words.length; index++) {
      if ( this.doNotConvert.indexOf(words[index]) > -1 ) {
        returnVal = returnVal.concat(this.convertDown(words[index])).concat(' ');
      } else {
        returnVal = returnVal.concat(this.convertUp(words[index])).concat(' ');
      }
    }
    return returnVal;
  }

}
