import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase',
  standalone: true
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string): unknown {
    if (!value) {
      return value;
    }

    return value.replace(/\w\S*/g, (txt: string) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

}
