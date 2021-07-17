import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Field} from '../../interfaces/field.interface';
import {FieldConfig} from '../../interfaces/field-config.interface';

@Component({
	selector: 'newt-form-input',
	templateUrl: './form-input.component.html',
	styleUrls: ['./form-input.component.scss'],
	host: {'[class]': 'class'}
})
export class FormInputComponent implements Field {
	config: FieldConfig;
	group: FormGroup;
	class: string;
}