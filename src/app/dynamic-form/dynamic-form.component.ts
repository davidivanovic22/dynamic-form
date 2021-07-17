import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FieldConfig} from '../interfaces/field-config.interface';

@Component({
    exportAs: 'dynamicForm',
    selector: 'newt-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {
    @Input()
    configRow: any = [];
    config: FieldConfig[] = [];

    @Output()
    submit: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;

    get controls() {
        return this.config.filter(({type}) => type !== 'button');
    }

    get changes() {
        return this.form.valueChanges;
    }

    get valid() {
        return this.form.valid;
    }

    get value() {
        return this.form.value;
    }

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.configRow.forEach(row => {
            this.config = this.config.concat(row);
        });
        this.form = this.createGroup();
    }

    ngOnChanges() {
        if (this.form) {
            const controls = Object.keys(this.form.controls);
            const configControls = this.controls.map((item) => item.name);

            controls
                .filter((control) => !configControls.includes(control))
                .forEach((control) => this.form.removeControl(control));

            configControls
                .filter((control) => !controls.includes(control))
                .forEach((name) => {
                    const config = this.config.find((control) => control.name === name);
                    this.form.addControl(name, this.createControl(config));
                });

        }
    }

    createGroup() {
        const group = this.fb.group({});
        this.controls.forEach(control => {
            if (control.type === "checkbox") {
                group.addControl(control.name, this.createArray(control))
            } else {
                group.addControl(control.name, this.createControl(control))
            }
        });
        console.log(group)
        return group;
    }

    createControl(config: FieldConfig) {
        const {disabled, validation, value} = config;
        return this.fb.control({disabled, value}, validation);
    }

    createArray(config: FieldConfig) {
        const {validation, options} = config;
        return this.fb.array(options, validation);
    }


    handleSubmit(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    }

    setDisabled(name: string, disable: boolean) {
        if (this.form.controls[name]) {
            const method = disable ? 'disable' : 'enable';
            this.form.controls[name][method]();
            return;
        }

        this.config = this.config.map((item) => {
            if (item.name === name) {
                item.disabled = disable;
            }
            return item;
        });
    }

    setValue(name: string, value: any) {
        this.form.controls[name].setValue(value, {emitEvent: true});
    }

}
