import {Component, OnInit} from '@angular/core';
import 'zone.js';
import 'reflect-metadata';
import * as DataSet from '@antv/data-set';

const chineseBreak = Math.round(Math.random() * 100);
const westernBreak = Math.round(Math.random() * (100 - chineseBreak));
const foodType = [{
  item: '中式快餐', count: chineseBreak
}, {
  item: '西餐', count: westernBreak
}, {
  item: '其余', count: 100 - chineseBreak - westernBreak
}];

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%',
}];
const foodData = new DataSet.View().source(foodType);
foodData.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
});
const food = foodData.rows;

const pop = Math.round(Math.random() * 100);
const rock = Math.round(Math.random() * (100 - pop));
const musicStyle = [{
  item: '流行音乐', count: pop
}, {
  item: '摇滚乐', count: rock
}, {
  item: '古典乐', count: 100 - pop - rock
}];
const musicData = new DataSet.View().source(musicStyle);
musicData.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
});
const music = musicData.rows;

const comedy = Math.round(Math.random() * 100);
const literaryFilm = Math.round(Math.random() * (100 - comedy));
const fileStyle = [{
  item: '喜剧', count: comedy
}, {
  item: '文艺片', count: literaryFilm
}, {
  item: '科幻片', count: 100 - comedy - literaryFilm
}];
const filmData = new DataSet.View().source(fileStyle);
filmData.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
});
const film = filmData.rows;

@Component({
  selector: 'app-monitor-pie',
  templateUrl: './monitor-pie.component.html',
  styleUrls: ['./monitor-pie.component.scss']
})
export class MonitorPieComponent implements OnInit {
  forceFit: boolean = true;
  height: number = 200;
  food = food;
  music = music;
  film = film;
  scale = scale;
  pieStyle = {
    stroke: '#fff',
    lineWidth: 1,
  };

  constructor() {
  }

  ngOnInit() {
  }

}
