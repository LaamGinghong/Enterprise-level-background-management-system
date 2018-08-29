import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-work-place-bottom-left-news',
  templateUrl: './work-place-bottom-left-news.component.html',
  styleUrls: ['./work-place-bottom-left-news.component.scss']
})
export class WorkPlaceBottomLeftNewsComponent implements OnInit {
  newsBox = [{
    img: '../../../../../../../../../../assets/angular.png',
    author: '林东东',
    action: '完成快速开始/便捷导航组件',
    time: '8 minutes ago'
  }, {
    img: '../../../../../../../../../../assets/vue.png',
    author: '李南北',
    action: '增加信息提示',
    time: '25 minutes ago'
  }, {
    img: '../../../../../../../../../../assets/bootstrap.png',
    author: '张小凡',
    action: '完成工作台进行项目中组件',
    time: '32 minutes ago'
  }, {
    img: '../../../../../../../../../../assets/react.png',
    author: '陈玉林',
    action: '修改类型',
    time: '16 hours ago'
  }, {
    img: '../../../../../../../../../../assets/ant-design.png',
    author: '陈昌盛',
    action: '布局',
    time: '16 hours ago'
  }, {
    img: '../../../../../../../../../../assets/typescript.png',
    author: '刘文贵',
    action: '工作台底部架构',
    time: '14 days ago'
  }];


  constructor() {
  }

  ngOnInit() {
  }

}
