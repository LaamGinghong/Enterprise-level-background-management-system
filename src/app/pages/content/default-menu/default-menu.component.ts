import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../../store/dataStore.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-default-menu',
  templateUrl: './default-menu.component.html',
  styleUrls: ['./default-menu.component.scss']
})
export class DefaultMenuComponent implements OnInit {
  menuData: Array<object>;
  email = 'laamginghong1996@gmail.com';
  name: string;
  loadingStatus = false;


  constructor(
    private dataStore: DataStoreService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.menuData = this.dataStore.getMenuData;
    this.initLoadStatus();
  }


  initLoadStatus() {
    this.loadingStatus = this.route.snapshot.queryParams.name ? true : false;
    this.name = this.route.snapshot.queryParams.name;
  }
  openHandler(item: { id: string, name: string, icon: string, children: Array<object>, isOpen: boolean }) {
    this.menuData.forEach((val: { id: string, name: string, icon: string, children: Array<object>, isOpen: boolean }) => {
      val.isOpen = item.id === val.id;
    });
  }
}
