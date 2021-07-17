import {Component, OnInit} from '@angular/core';
import {FieldConfig} from "../../interfaces/field-config.interface";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'newt-form-radiobutton',
    templateUrl: './form-radiobutton.component.html',
    styleUrls: ['./form-radiobutton.component.scss']
})
export class FormRadiobuttonComponent {
    config!: FieldConfig;
    group!: FormGroup;
    class!: string;

}
