import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'valueToStatus'
})
export class ValueToStatusPipe implements PipeTransform {

  transform(value: number): string {
    let status = '';
    switch (value) {
      case 1:
        status = 'default';
        break;
      case 2:
        status = 'processing';
        break;
      case 3:
        status = 'success';
        break;
      case 4:
        status = 'error';
        break;
    }
    return status;
  }

}
