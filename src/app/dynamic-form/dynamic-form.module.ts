import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFormComponent} from './dynamic-form.component';
import {FormButtonComponent} from './form-button/form-button.component';
import {FormInputComponent} from './form-input/form-input.component';
import {FormSelectComponent} from './form-select/form-select.component';
import {DynamicFieldDirective} from '../directives/dynamic-field.directive';
import {FormDatepickerComponent} from './form-datepicker/form-datepicker.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { OptionPreviewPipe } from './pipes/option-preview.pipe';
import { FormRadiobuttonComponent } from './form-radiobutton/form-radiobutton.component';
import {MaterialModule} from "../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        DynamicFormComponent,
        DynamicFieldDirective,
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        FormDatepickerComponent,
        FormCheckboxComponent,
        OptionPreviewPipe,
        FormRadiobuttonComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    exports: [
        DynamicFormComponent
    ],
    entryComponents: [
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        FormDatepickerComponent
    ],
    providers: [
        MatDatepickerModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class DynamicFormModule {
}
