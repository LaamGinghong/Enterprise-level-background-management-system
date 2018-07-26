import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  loadingStatus = false;
  name: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.route);
    this.loadingStatus = this.route.snapshot.queryParams.name ? true : false;
    this.name = this.route.snapshot.queryParams.name;
  }

}
