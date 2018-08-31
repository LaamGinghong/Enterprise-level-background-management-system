import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  box = [{
    name: 'AliPay',
    text: '那是一种内在的东西， 他们到达不了，也无法触及的',
    time: '不到1分钟',
    img: 'assets/Pic1.png'
  }, {
    name: 'Angular',
    text: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    time: '大约2小时',
    img: 'assets/Pic3.png'
  }, {
    name: 'Ant Design',
    text: '生命就像一盒巧克力，结果往往出人意料',
    time: '大约4小时',
    img: 'assets/Pic2.png'
  }, {
    name: 'Ant Design Pro',
    text: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    time: '大约6小时',
    img: 'assets/Pic4.png'
  }];

  constructor() {
  }

  initBox(): Array<object> {
    let box = [];
    for (let i = 0; i < 4; i++) {
      box = box.concat(this.box);
    }
    return box;
  }
}
