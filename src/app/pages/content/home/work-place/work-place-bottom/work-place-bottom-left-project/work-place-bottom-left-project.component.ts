import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-work-place-bottom-left-project',
  templateUrl: './work-place-bottom-left-project.component.html',
  styleUrls: ['./work-place-bottom-left-project.component.scss']
})
export class WorkPlaceBottomLeftProjectComponent implements OnInit {
  projectBox = [{
    title: 'Angular',
    img: '../../../../../../../../../../assets/angular.png',
    text: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    author: '全组都是吴彦祖',
    time: '大约1年'
  }, {
    title: 'Ant Design',
    img: '../../../../../../../../../../assets/ant-design.png',
    text: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    author: '中二少女团',
    time: '不到1分钟'
  }, {
    title: 'Vue',
    img: '../../../../../../../../../../assets/vue.png',
    text: '拒绝重复造轮子',
    author: '科学搬砖族',
    time: '不到1分钟'
  }, {
    title: 'React',
    img: '../../../../../../../../../../assets/react.png',
    text: '生命就像一盒巧克力，结果往往出人意料',
    author: '骗你来学计算机',
    time: '大约1年'
  }, {
    title: 'Bootstrap',
    img: '../../../../../../../../../../assets/bootstrap.png',
    text: '凛冬将至',
    author: '高逼格设计天团',
    time: '大约1年'
  }, {
    title: 'TypeScript',
    img: '../../../../../../../../../../assets/typescript.png',
    text: '那是一种内在的东西， 他们到达不了，也无法触及的',
    author: '程序员日常',
    time: '30分钟前'
  }];

  constructor(
    private message: NzMessageService
  ) {
  }

  ngOnInit() {
  }

  showMessage(message: string) {
    this.message.info(message, {nzDuration: 2000});
  }
}
