import {Component} from '@angular/core';
import {Field} from '../../interfaces/field.interface';
import {FieldConfig} from '../../interfaces/field-config.interface';
import {FormGroup} from '@angular/forms';
import {config} from "rxjs";

@Component({
    selector: 'newt-form-select',
    templateUrl: './form-select.component.html',
    styleUrls: ['./form-select.component.scss'],
    host: {'[class]': 'class'}
})
export class FormSelectComponent implements Field {
    config!: FieldConfig;
    group!: FormGroup;
    class!: string;


}
