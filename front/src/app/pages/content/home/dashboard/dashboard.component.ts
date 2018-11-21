import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DashboardService} from './dashboard.service';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  messageArray = [];

  @ViewChild('chatBox') chatBox: ElementRef;
  @ViewChild('todo') todo: ElementRef;

  constructor(
    private renderer2: Renderer2,
    private dashboardService: DashboardService,
    private notification: NzNotificationService
  ) {
  }

  ngOnInit() {
    this.dashboardService.chatBox = this.chatBox;
    this.dashboardService.todo = this.todo;
    this.getMessage();
  }

  getMessage(): void {
    this.dashboardService.getDashboardMessage().subscribe((result: { success: boolean, message: Array<object> }) => {
      if (result.success) {
        this.messageArray = result.message;
      }
    });
  }

  activeItem(value: { id: number, isActive: number }): void {
    const option = {
      id: value.id,
      isActive: Number(!value.isActive)
    };
    this.dashboardService.getDashboardMessageActive(option).subscribe((result: { success: boolean, message: string }) => {
      this.notification.create(result.success ? 'success' : 'error', '删除', result.message);
      if (result.success) {
        value.isActive = Number(!value.isActive);
      }
    });
  }

  deleteItem(value: { id: number, isDelete: number }): void {
    const option = {
      id: value.id,
      isDelete: Number(!value.isDelete)
    };
    this.dashboardService.getDashboardMessageDelete(option).subscribe((result: { success: boolean, message: string }) => {
      this.notification.create(result.success ? 'success' : 'error', '删除', result.message);
      if (result.success) {
        value.isDelete = 1;
      }
    });
  }

}
