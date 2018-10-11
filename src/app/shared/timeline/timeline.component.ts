import { Component, OnInit, Input } from '@angular/core';
import { Timeline } from '../../models/timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() timelines: Array<Timeline>;

  constructor() {  }

  ngOnInit() {
    
  }

}
