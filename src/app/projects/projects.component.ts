import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Output() hideProjects: EventEmitter<any> = new EventEmitter();


  constructor() {
  }

  hide() {
    this.hideProjects.emit();
  }
}
