import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'content'
})
export class ContentPipe implements PipeTransform {

  transform(text) {
    if (text.length > 5) {
      return text.substring(0, 4) + '...';
    } else {
      return text;
    }
  }

}
