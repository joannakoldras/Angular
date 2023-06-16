import { AddTaskService } from './../add-task.service';
import { Component, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { extend, addClass } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsModel, CardSettingsModel, SwimlaneSettingsModel, DialogSettingsModel, CardRenderedEventArgs } from '@syncfusion/ej2-angular-kanban';
import { cardData } from '../data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    encapsulation: ViewEncapsulation.None

})
export class DashboardComponent {
    taskForm: FormGroup;
    @ViewChild('kanbanObj') kanbanObj?: KanbanComponent;
    public kanbanData: Object[] = extend([], cardData, undefined, true) as Object[];
    public columns: ColumnsModel[] = [
        { headerText: 'To Do', keyField: 'Open', allowToggle: true },
        { headerText: 'Doing', keyField: 'Doing', allowToggle: true },
        { headerText: 'Done', keyField: 'Close', allowToggle: true }
    ];
    public cardSettings: CardSettingsModel = {
        headerField: 'Title',
        template: '#cardTemplate',
        selectionType: 'Multiple'
    };
    public dialogSettings: DialogSettingsModel = {
        fields: [
            { text: 'ID', key: 'Title', type: 'TextBox' },
            { key: 'Status', type: 'DropDown' },
            { key: 'Assignee', type: 'DropDown' },
            { key: 'RankId', type: 'TextBox' },
            { key: 'Summary', type: 'TextArea' }
        ]
    };
    public swimlaneSettings: SwimlaneSettingsModel = { keyField: 'Assignee' };

    constructor(private addTaskService: AddTaskService,
        private formBuilder: FormBuilder) {
        this.taskForm = this.formBuilder.group({
            'Id': [],
            'Title': ['', Validators.required],
            'Status': ['Open'],
            'Summary': ['', Validators.required],
            'Priority': ['', Validators.required],
            'Tags': ['', Validators.required],
            'RankId': [1],
            'Assignee': ['Joanna', Validators.required]
        });
    }

    public getString(assignee: string) {
        return assignee.match(/\b(\w)/g)?.join('').toUpperCase();
    }

    cardRendered(args: CardRenderedEventArgs): void {
        const val: string = (<{ [key: string]: Object }>(args.data))['Priority'] as string;
        addClass([args.element], val);
    }

    onSubmit(): void {
        if (this.taskForm.valid) {
            this.taskForm.controls['Id'].setValue('Task ' + Math.floor(Math.random() * 10000000000));
            this.addTaskService.add(this.taskForm.value);
            if(this.kanbanData.length) {
                let copy = [...this.kanbanData];
                copy.push(this.taskForm.value);
                this.kanbanData = extend([], copy, undefined, true) as Object[];
            } else {
                this.kanbanData = extend([], cardData, undefined, true) as Object[];
            }
            console.log(this.kanbanData);
            this.taskForm.reset({ 'Status': 'Open', 'RankId': 1, "Assignee": "Joanna" });
        } else {
            alert('Please fill in all fields!');
        }
    }
}
