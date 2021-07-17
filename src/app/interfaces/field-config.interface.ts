import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  name: string;
  type: string;
  disabled?: boolean;
  readonly ?: boolean;
  label?: string;
  row?: string;
  rowValue?: string;
  options?: any[];
  selected?: any[];
  placeholder?: string;
  validation?: ValidatorFn[];
  value?: any;
  condition?: boolean;
  containerClass?: string;
  multiple?: boolean;
  event: string;
  function: any;
  formOption: string;
  color: any;
  buttons: any[];
}
