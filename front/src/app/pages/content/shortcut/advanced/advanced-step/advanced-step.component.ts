import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-advanced-step',
  templateUrl: './advanced-step.component.html',
  styleUrls: ['./advanced-step.component.scss']
})
export class AdvancedStepComponent implements OnInit {

  constructor(
    public message: NzMessageService
  ) {
  }

  ngOnInit() {
  }

}
