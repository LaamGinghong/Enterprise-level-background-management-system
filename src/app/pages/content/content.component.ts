import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentService} from './content.service';
import {DataStoreService} from '../../store/dataStore.service';
import {NzMessageService, NzTabComponent} from 'ng-zorro-antd';
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
  breadCrumb = ['Home', 'Dashboard'];

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
    this.contentService.selectItem$.subscribe((data: { id: string, url: string, breadCrumb: Array<string>, name: string }) => {
      if (data) {
        this.breadCrumb = data.breadCrumb;
      }
    });
  }

  initLoadStatus() { // 初始化登陆状态
    this.loadingStatus = !!document.cookie;
    this.name = document.cookie.split('=')[1];
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
    if (word === '登出') {
      const date = new Date();
      date.setTime(0);
      document.cookie = `username=;expires=${date};path=/`;
      location.reload();
    }
  }

  openItem(item: { id: string, name: string, icon?: string, children?: Array<object>, isOpen?: boolean, url?: string, isTitle?: boolean, breadCrumb: Array<string> }, content) { // 打开菜单item
    if (!item.isTitle) {
      if (item.name === '全屏') {
        const fullScreen = content.requestFullscreen || content.webkitRequestFullScreen || content.mozRequestFullScreen || content.msRequestFullScreen;
        if (fullScreen) {
          fullScreen.call(content);
        }
        return;
      }
      if (item.name === '403' || item.name === '404' || item.name === '500' || item.name === '登录' || item.name === '注册' || item.name === '注册结果') {
        this.router.navigate([`/pages${item.url}`]);
        return;
      }

      const index = this.tabArray.findIndex(value => item.id === value.id);
      if (index === -1) {
        this.tabArray.push(item);
        this.selectedIndex = this.tabArray.length - 1;
      } else {
        this.tabArray.forEach((value, i) => {
          this.selectedIndex = value.id === item.id ? i : this.selectedIndex;
        });
      }
      this.contentService.broadcastSelectItem(item);
      this.router.navigate([`/pages/content${item.url}`]);
    }
  }


  closeTab(item: { id: string, name: string, icon?: string, children?: Array<object>, isOpen?: boolean, url?: string, isHover?: boolean }) { // 删除tab栏item
    item.isHover = false;
    this.tabArray.forEach((value, index, array) => {
      if (value.id === item.id) {
        array.splice(index, 1);
        if (index < array.length - 1) {
          if (index < this.selectedIndex) {
            this.selectedIndex--;
          }
        } else {
          this.selectedIndex = array.length - 1;
        }
      }
    });
    this.router.navigate([`/pages/content${this.tabArray[this.selectedIndex].url}`]);
  }

  changeSelectedIndex(e: { index: number, tab: NzTabComponent }) {
    this.selectedIndex = e.index;
    this.router.navigate([`/pages/content${this.tabArray[this.selectedIndex].url}`]);
  }
}

