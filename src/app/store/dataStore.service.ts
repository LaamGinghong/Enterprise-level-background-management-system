import { Injectable } from '@angular/core';
import { autorun, computed, action, observable } from 'mobx';

@Injectable()
export class DataStoreService {
  @observable menuData: Array<object>;

  constructor() {
    if (localStorage.menuData) {
      this.menuData = JSON.parse(localStorage.menuData);
    }
    autorun(() => {
      localStorage.menuData = JSON.stringify(this.menuData);
    });
  }

  @computed get getMenuData() {
    return this.menuData;
  }

  @action setMenuData(menu: Array<object>) {
    this.menuData = menu;
  }
}
