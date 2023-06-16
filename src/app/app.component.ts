import { Component, ViewChild, ViewEncapsulation, Inject } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    showProjects: boolean = true;

    constructor() {
    }

    showDashboard() {
        this.showProjects = false;
    }

}
