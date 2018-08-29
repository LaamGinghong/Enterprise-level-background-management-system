import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-work-place-bottom-right-team',
  templateUrl: './work-place-bottom-right-team.component.html',
  styleUrls: ['./work-place-bottom-right-team.component.scss']
})
export class WorkPlaceBottomRightTeamComponent implements OnInit {
  teamBox = [{
    img: '../../../../../../../../../../assets/angular.png',
    name: '科学天团'
  }, {
    img: '../../../../../../../../../../assets/vue.png',
    name: '中二少女团'
  }, {
    img: '../../../../../../../../../../assets/react.png',
    name: '程序死肥宅'
  }, {
    img: '../../../../../../../../../../assets/ant-design.png',
    name: '科学搬砖组'
  }, {
    img: '../../../../../../../../../../assets/bootstrap.png',
    name: '神经病贵族'
  }, {
    img: '../../../../../../../../../../assets/typescript.png',
    name: '骗你学计算机'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
