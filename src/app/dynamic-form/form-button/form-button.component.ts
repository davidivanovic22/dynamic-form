import {Component} from '@angular/core';
import {Field} from '../../interfaces/field.interface';
import {FieldConfig} from '../../interfaces/field-config.interface';
import {FormGroup} from '@angular/forms';

@Component({
	selector: 'newt-form-button',
	templateUrl: './form-button.component.html',
	styleUrls: ['./form-button.component.scss'],
	host: {'[class]': 'class'}
})
export class FormButtonComponent implements Field {
	config: FieldConfig;
	group: FormGroup;
	class: string;
}
