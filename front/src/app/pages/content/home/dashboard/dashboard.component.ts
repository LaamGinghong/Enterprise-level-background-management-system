import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DashboardService} from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  messageArray = [{
    name: '苏先生',
    message: '请告诉我，我应该说点什么好？',
    url: '../../../../../assets/1.png'
  }, {
    name: 'はなさき',
    message: 'ハルカソラトキヘダツヒカリ',
    url: '../../../../../assets/2.png'
  }, {
    name: 'cipchk',
    message: 'this world was never meant for one as beautiful as you.',
    url: '../../../../../assets/3.png'
  }, {
    name: 'Kent',
    message: 'my heart is beating with hers',
    url: '../../../../../assets/4.png'
  }, {
    name: 'Are you',
    message: 'They always said that I love beautiful girl than my friends',
    url: '../../../../../assets/5.png'
  }, {
    name: 'Forever',
    message: 'Walking through green fields ，sunshine in my eyes.',
    url: '../../../../../assets/6.png'
  }];
  @ViewChild('chatBox') chatBox: ElementRef;
  @ViewChild('todo') todo: ElementRef;

  constructor(
    private renderer2: Renderer2,
    private dashboardService: DashboardService
  ) {
  }

  ngOnInit() {
    this.dashboardService.chatBox = this.chatBox;
    this.dashboardService.todo = this.todo;
  }

  operateItem(mark: number, index: number, item: object): void {
    if (mark) {
      this.messageArray.splice(index, 1);
    } else {
      item['isActive'] = !item['isActive'];
    }
  }

}
