import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-work-place-bottom-right-index',
  templateUrl: './work-place-bottom-right-index.component.html',
  styleUrls: ['./work-place-bottom-right-index.component.scss']
})
export class WorkPlaceBottomRightIndexComponent implements OnInit {
  option = {
    tooltip: {},
    legend: {
      data: ['CN Uzi', 'KRA Ruler']
    },
    radar: {
      center: ['50%', '52%'],
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [
        {name: '击杀（Kill）', max: 10},
        {name: '死亡（Death）', max: 10},
        {name: '助攻（Assist）', max: 10},
        {name: '参团（Team）', max: 10},
        {name: '发育（Grow）', max: 10},
        {name: '压制（Suppress）', max: 10}
      ]
    },
    series: {
      name: 'CN Uzi VS KRA Ruler',
      type: 'radar',
      areaStyle: {normal: {}},
      data: [{
        value: [7.1, 3.5, 8.6, 7.7, 16.9, 15.2],
        name: 'CN Uzi'
      }, {
        value: [3.1, 1.2, 4.5, 8.5, 12.5, 8.7],
        name: 'KRA Ruler'
      }]
    },
    grid: {
      bottom: '5%'
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
