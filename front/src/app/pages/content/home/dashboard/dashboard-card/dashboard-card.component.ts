import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {SharingService} from '../../../../../sharing/sharing.service';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {
  cardArray = [];

  constructor(
    private dashboardService: DashboardService,
  ) {
  }

  ngOnInit() {
    this.initCardArray();
  }

  initCardArray(): void {
    this.dashboardService.getDashboardCard().subscribe((result: { success: boolean, message: Array<object> }) => {
      if (result.success) {
        this.cardArray = result.message;
      }
    });
  }
}
