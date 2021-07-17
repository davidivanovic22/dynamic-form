import {Component} from '@angular/core';
import {Field} from '../../interfaces/field.interface';
import {FieldConfig} from '../../interfaces/field-config.interface';
import {FormGroup} from '@angular/forms';

@Component({
	selector: 'newt-form-select-search',
	templateUrl: './form-select-search.component.html',
	styleUrls: ['./form-select-search.component.scss'],
	host: {'[class]': 'class'}
})
export class FormSelectSearchComponent implements Field {
	config: FieldConfig;
	group: FormGroup;
	class: string;
}