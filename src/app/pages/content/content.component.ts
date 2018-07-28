import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from './content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  loadingStatus = false;
  name: string;
  menuData: Array<object>;
  email = 'laamginghong1996@gmail.com';

  constructor(private route: ActivatedRoute,
    private contentService: ContentService) {
  }

  ngOnInit() {
    this.initLoadStatus();
    this.initMenuData();
  }

  initLoadStatus() {
    this.loadingStatus = this.route.snapshot.queryParams.name ? true : false;
    this.name = this.route.snapshot.queryParams.name;
  }

  initMenuData() {
    this.contentService.getData().subscribe((data: { success: boolean, value: Array<object> }) => {
      if (data.success) {
        this.menuData = data.value;
      }
    });
  }

  openHandler(item: { id: string, name: string, icon: string, children: Array<object>, isOpen: boolean }) {
    this.menuData.forEach((val: { id: string, name: string, icon: string, children: Array<object>, isOpen: boolean }) => {
      val.isOpen = item.id === val.id;
    });
  }
}

