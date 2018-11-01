import { Injectable } from '@angular/core';
import { autorun, computed, action, observable } from 'mobx';

@Injectable()
export class DataStoreService {
  @observable menuData: Array<object>;

  constructor() {
  }

  @computed get getMenuData() {
    return this.menuData;
  }

  @action setMenuData(menu: Array<object>) {
    this.menuData = menu;
  }
}
