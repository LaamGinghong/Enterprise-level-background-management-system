import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'advancedTabsCardResult'
})
export class AdvancedTabsCardResultPipe implements PipeTransform {

  transform(value: number): string {
    let result = '';
    switch (value) {
      case 0:
        result = '进行中';
        break;
      case 1:
        result = '已完成';
        break;
      case 2:
        result = '失败';
        break;
    }
    return result;
  }

}
