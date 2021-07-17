import { Component, OnInit } from '@angular/core';
import {FieldConfig} from "../../interfaces/field-config.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'newt-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss']
})
export class FormCheckboxComponent {
  config: FieldConfig;
  group: FormGroup;
  class: string;
}
