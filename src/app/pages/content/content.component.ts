import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentService} from './content.service';
import {DataStoreService} from '../../store/dataStore.service';
import {NzMessageService} from 'ng-zorro-antd';
import {flyIn, flyOut} from '../../../assets/sim-animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [flyIn, flyOut]
})

export class ContentComponent implements OnInit {
  loadingStatus = false;
  name: string;
  menuData: Array<object>;
  menuStatus = true;
  email = 'laamginghong1996@gmail.com';

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private dataStore: DataStoreService,
    private message: NzMessageService,
    private router: Router
  ) {
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
        this.dataStore.setMenuData(data.value);
        this.menuData = this.dataStore.getMenuData;
      }
    });
  }

  openHandler(item: { id: string, name: string, icon: string, children: Array<object>, isOpen: boolean }) {
    this.menuData.forEach((val: { id: string, name: string, icon: string, children: Array<object>, isOpen: boolean }) => {
      val.isOpen = item.id === val.id;
    });
  }

  changeMenu() {
    this.menuStatus = !this.menuStatus;
  }

  openMessage(word: string) {
    this.message.remove();
    this.message.success(`您点击了${word}！`, {nzDuration: 2000});
  }

  openItem(item: { id: string, name: string, icon?: string, children?: Array<object>, isOpen?: boolean }) {
    // this.router.navigate(['/dashboard']);
  }
}

