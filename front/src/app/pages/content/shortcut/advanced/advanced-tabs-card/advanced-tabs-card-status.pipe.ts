import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'advancedTabsCardStatus'
})
export class AdvancedTabsCardStatusPipe implements PipeTransform {

  transform(value: number): string {
    let status = '';
    switch (value) {
      case 0:
        status = 'processing';
        break;
      case 1:
        status = 'success';
        break;
      case 2:
        status = 'error';
        break;
    }
    return status;
  }

}
