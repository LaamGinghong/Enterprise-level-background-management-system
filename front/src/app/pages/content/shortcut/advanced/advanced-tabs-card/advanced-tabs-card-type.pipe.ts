import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'advancedTabsCardType'
})
export class AdvancedTabsCardTypePipe implements PipeTransform {
  transform(value: number): string {
    let type = '';
    switch (value) {
      case 0:
        type = '订购关系生效';
        break;
      case 1:
        type = '财务复审';
        break;
      case 2:
        type = '部门初审';
        break;
      case 3:
        type = '提交订单';
        break;
      case 4:
        type = '创建订单';
        break;
    }
    return type;
  }

}
