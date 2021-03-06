import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: any, limit: number) {
        if (!value) {
            return null;
        } else {
            const actualLimit = limit ? limit : 20;
            if (actualLimit < value.length) {
                return value.substr(0, actualLimit) + '...';
            } else {
                return value;
            }
        }
    }
}
