import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'valueToText'
})
export class ValueToTextPipe implements PipeTransform {
  statusBox = [{
    value: 1,
    text: '关闭'
  }, {
    value: 2,
    text: '运行中'
  }, {
    value: 3,
    text: '已上线'
  }, {
    value: 4,
    text: '异常'
  }];

  transform(value: number): string {
    let text = '';
    this.statusBox.forEach((item: { value: number, text: string }) => {
      if (item.value === value) {
        text = item.text;
      }
    });
    return text;
  }

}
