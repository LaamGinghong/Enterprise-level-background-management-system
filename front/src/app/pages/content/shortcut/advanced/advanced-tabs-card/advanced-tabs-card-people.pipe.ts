import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'advancedTabsCardPeople'
})
export class AdvancedTabsCardPeoplePipe implements PipeTransform {

  transform(value: number): string {
    let people = '';
    switch (value) {
      case 0:
        people = '李小龙';
        break;
      case 1:
        people = '张丹丹';
        break;
      case 2:
        people = '赵灵敏';
        break;
      case 3:
        people = '闫亚龙';
        break;
      case 4:
        people = '沈秋凤';
        break;
    }
    return people;
  }

}
