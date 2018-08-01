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
  tabArray = [];
  selectedIndex = 0;

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
    this.initTabArray();
  }

  initLoadStatus() { // 初始化登陆状态
    this.loadingStatus = this.route.snapshot.queryParams.name;
    this.name = this.route.snapshot.queryParams.name;
  }

  initMenuData() { // 初始化菜单
    this.contentService.getData().subscribe((data: { success: boolean, value: Array<object> }) => {
      if (data.success) {
        this.dataStore.setMenuData(data.value);
        this.menuData = this.dataStore.getMenuData;
      }
    });
  }

  initTabArray() {
    this.tabArray.push({
      id: '00101',
      name: '仪表盘',
      url: '/home/dashboard'
    });
  }

  openHandler(item: { id: string, name: string, icon: string, children: Array<object>, isOpen: boolean }) { // 打开menu一级菜单
    this.menuData.forEach((val: { id: string, name: string, icon: string, children: Array<object>, isOpen: boolean }) => {
      val.isOpen = item.id === val.id;
    });
  }

  changeMenu() { // 更改大小菜单
    this.menuStatus = !this.menuStatus;
  }

  openMessage(word: string) { // 点击个人头像
    this.message.remove();
    this.message.success(`您点击了${word}！`, {nzDuration: 2000});
  }

  openItem(item: { id: string, name: string, icon?: string, children?: Array<object>, isOpen?: boolean, url?: string }) {
    const index = this.tabArray.findIndex(value => item.id === value.id);
    if (index === -1) {
      this.tabArray.push(item);
      this.selectedIndex = this.tabArray.length - 1;
    } else {
      this.tabArray.forEach((value, index) => {
        this.selectedIndex = value.id === item.id ? index : this.selectedIndex;
      });
    }
    this.router.navigate([`/pages/content${item.url}`]);
  }
}

