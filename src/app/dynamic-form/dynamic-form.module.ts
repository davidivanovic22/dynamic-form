import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFormComponent} from './dynamic-form.component';
import {FormButtonComponent} from './form-button/form-button.component';
import {FormInputComponent} from './form-input/form-input.component';
import {FormSelectComponent} from './form-select/form-select.component';
import {FormSelectSearchComponent} from './form-select-search/form-select-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFieldDirective} from '../directives/dynamic-field.directive';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {FormDatepickerComponent} from './form-datepicker/form-datepicker.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { OptionPreviewPipe } from './pipes/option-preview.pipe';
import { FormRadiobuttonComponent } from './form-radiobutton/form-radiobutton.component';
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
    declarations: [
        DynamicFormComponent,
        DynamicFieldDirective,
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        FormSelectSearchComponent,
        FormDatepickerComponent,
        FormCheckboxComponent,
        OptionPreviewPipe,
        FormRadiobuttonComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        NgxMatSelectSearchModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatIconModule,
        MatCheckboxModule,
        MatRadioModule
    ],
    exports: [
        DynamicFormComponent
    ],
    entryComponents: [
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        FormSelectSearchComponent,
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
