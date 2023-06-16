
import { NumericTextBoxAllModule, TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import {HttpClientModule} from '@angular/common/http'
import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';

import { KanbanAllModule } from '@syncfusion/ej2-angular-kanban';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLicense } from '@syncfusion/ej2-base';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';



registerLicense('ORg4AjUWIQA/Gnt2VFhiQlJPcEBBXXxLflF1VWFTe1l6cFRWESFaRnZdQV1mSn9TdEFrWXlfc3Bd');



@NgModule({ declarations: [ AppComponent, DashboardComponent, ProjectsComponent ], imports: [ CommonModule, HttpClientModule, KanbanAllModule, DialogModule,   CheckBoxAllModule,DatePickerModule,DropDownListAllModule, NumericTextBoxAllModule, TextBoxAllModule, ReactiveFormsModule, FormsModule, BrowserModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
