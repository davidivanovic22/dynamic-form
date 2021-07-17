import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Field} from '../../interfaces/field.interface';
import {FieldConfig} from '../../interfaces/field-config.interface';

@Component({
	selector: 'newt-form-datepicker',
	templateUrl: './form-datepicker.component.html',
	styleUrls: ['./form-datepicker.component.scss'],
	host: {'[class]': 'class'}
})
export class FormDatepickerComponent implements Field {
	config: FieldConfig;
	group: FormGroup;
	class: string;

	public reset(event) {
		event.stopPropagation();
		this.group.controls[this.config.name].setValue('', {emitEvent: true});
	}
}
