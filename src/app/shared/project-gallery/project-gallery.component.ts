import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.css']
})
export class ProjectGalleryComponent implements OnInit {

  @Input() projects;
  constructor() { }

  ngOnInit() {
  }

}
