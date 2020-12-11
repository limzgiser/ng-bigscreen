import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arcs?: any): any {
    return value.filter((i: any) => {
      return i.extend.position === arcs;
    });
  }

}
