import {Component, ViewChild, OnInit} from '@angular/core';
import {Validators} from '@angular/forms';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {Theme} from "jasmine-spec-reporter/built/theme";

@Component({
    selector: 'newt-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    config: any = [];
    @ViewChild(DynamicFormComponent, {static: false}) form: DynamicFormComponent;
    name = 'Angular';

    ngOnInit() {
        this.initQueryForm();
    }

    initQueryForm() {
        const list: any[] = [
            {id: 1, name: 'David', type: {id: 1, name: "Heroj"}},
            {id: 2, name: 'Djoka'},
            {id: 3, name: 'Mika'},
            {id: 4, name: 'Zmaj'},
            {id: 5, name: 'Zika'}
        ];

        this.config = [
            [
                {
                    type: 'input',
                    name: 'fullName',
                    placeholder: 'Full Name',
                    validation: [],
                    containerClass: 'col-3 kt-margin-bottom-10-mobile',
                    event: "input",
                    function: this.print
                },
                {
                    type: 'input',
                    name: 'mobile',
                    placeholder: 'Mobile',
                    validation: [],
                    containerClass: 'col-3 kt-margin-bottom-10-mobile'
                },
                {
                    type: 'input',
                    name: 'city',
                    placeholder: 'City',
                    validation: [Validators.required],
                    containerClass: 'col-3 kt-margin-bottom-10-mobile'
                },
                {
                    type: 'datepicker',
                    name: 'Datepicker',
                    placeholder: 'datepicker',
                    validation: [Validators.required],
                    readonly: true,
                    containerClass: 'col-3 kt-margin-bottom-10-mobile'
                },
                {
                    type: 'select',
                    name: 'Select',
                    placeholder: 'select',
                    validation: [Validators.required],
                    containerClass: 'col-3 kt-margin-bottom-10-mobile',
                    condition: true,
                    options: list,
                    row: "name",
                    multiple: true,
                    event: "valueChange",
                    function: this.print
                },
                {
                    type: 'checkbox',
                    name: 'man',
                    validation: [Validators.required],
                    containerClass: 'col-3 kt-margin-bottom-10-mobile',
                    condition: true,
                    options: list,
                    row: "name",
                    rowValue: "name",
                    event: "change",
                    function: this.print
                },
                {
                    type: 'radiobutton',
                    name: 'man1',
                    validation: [Validators.required],
                    containerClass: 'col-3 kt-margin-bottom-10-mobile',
                    condition: true,
                    options: list,
                    row: "name",
                    rowValue: "name",
                    event: "change",
                    function: this.print
                },
                {
                    type: 'button',
                    name: 'submit',
                    buttons:
                        [
                            {
                                buttonType: "raised",
                                label: "Next",
                                event: "click",
                                function: this.print,
                                class: "button-margin-left"
                            },
                            {
                                buttonType: "stroked",
                                label: "Back",
                                event: "click",
                                function: this.print,
                                class: "button-margin-left"
                            }
                        ],
                    color: "primary",
                    containerClass: 'col-md-12'
                }
            ]
        ];
    }

    print(data) {
        console.log(data)
    }

    submit(value: { [name: string]: any }) {
        console.log('value ', value);
    }
}
