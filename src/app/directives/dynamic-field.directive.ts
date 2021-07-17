import {
	ComponentFactoryResolver,
	ComponentRef,
	Directive,
	Input,
	OnChanges,
	OnInit,
	Type,
	ViewContainerRef
} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {FormButtonComponent} from '../dynamic-form/form-button/form-button.component';
import {FormInputComponent} from '../dynamic-form/form-input/form-input.component';
import {FormSelectComponent} from '../dynamic-form/form-select/form-select.component';
import {FormSelectSearchComponent} from '../dynamic-form/form-select-search/form-select-search.component';
import {FormCheckboxComponent} from '../dynamic-form/form-checkbox/form-checkbox.component';
import {Field} from '../interfaces/field.interface';
import {FieldConfig} from '../interfaces/field-config.interface';
import {FormDatepickerComponent} from '../dynamic-form/form-datepicker/form-datepicker.component';
import {FormRadiobuttonComponent} from "../dynamic-form/form-radiobutton/form-radiobutton.component";


const components = {
	button: FormButtonComponent,
	input: FormInputComponent,
	selectSearch: FormSelectSearchComponent,
	select: FormSelectComponent,
	datepicker: FormDatepickerComponent,
	checkbox: FormCheckboxComponent,
	radiobutton: FormRadiobuttonComponent
};

@Directive({
	selector: '[newtDynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
	@Input()
	config: FieldConfig;

	@Input()
	group: FormGroup;

	@Input()
	class: string;

	component: ComponentRef<Field>;

	constructor(
		private resolver: ComponentFactoryResolver,
		private container: ViewContainerRef
	) {
	}

	ngOnChanges() {
		if (this.component) {
			this.component.instance.config = this.config;
			this.component.instance.group = this.group;
			this.component.instance.class = this.class;
		}
	}

	ngOnInit() {
		if (!components[this.config.type]) {
			const supportedTypes = Object.keys(components).join(', ');
			throw new Error(
				`Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
			);
		}
		const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
		this.component = this.container.createComponent(component);
		this.component.instance.config = this.config;
		this.component.instance.group = this.group;
		this.component.instance.class = this.class;
	}
}
