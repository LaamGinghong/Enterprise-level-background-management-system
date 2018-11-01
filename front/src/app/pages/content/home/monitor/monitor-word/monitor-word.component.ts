import {Component, OnInit} from '@angular/core';
import {registerShape} from 'viser-ng';
import * as DataSet from '@antv/data-set';
import {MonitorService} from '../monitor.service';

registerShape('point', 'cloud', {
  draw(cfg, container) {
    return container.addShape('text', {
      attrs: {
        fillOpacity: cfg.opacity,
        fontSize: cfg.origin._origin.size,
        rotate: cfg.origin._origin.rotate,
        text: cfg.origin._origin.text,
        textAlign: 'center',
        fontFamily: cfg.origin._origin.font,
        fill: cfg.color,
        textBaseline: 'Alphabetic',
        ...cfg.style,
        x: cfg.x,
        y: cfg.y,
      },
    });
  }
});

const scale = [
  {dataKey: 'x', nice: false},
  {dataKey: 'y', nice: false},
];

const padding = [0];

@Component({
  selector: 'app-monitor-word',
  templateUrl: './monitor-word.component.html',
  styleUrls: ['./monitor-word.component.scss']
})
export class MonitorWordComponent implements OnInit {
  scale = scale;
  data = [];
  padding = padding;

  constructor(
    private monitorService: MonitorService
  ) {

  }

  ngOnInit() {
    this.monitorService.getPopulation().subscribe(data => {
      const dv = new DataSet.View().source(data);
      const range = dv.range('value');
      const min = range[0];
      const max = range[1];
      dv.transform({
        type: 'tag-cloud',
        fields: ['x', 'value'],
        size: [420, 200],
        font: 'Verdana',
        padding: 0,
        timeInterval: 5000, // max execute time
        rotate() {
          let random = ~~(Math.random() * 4) % 4;
          if (random == 2) {
            random = 0;
          }
          return random * 90; // 0, 90, 270
        },
        fontSize(d) {
          if (d.value) {
            return ((d.value - min) / (max - min)) * (80 - 24) + 24;
          }
          return 0;
        }
      });
      this.data = dv.rows;
    });
  }

}
