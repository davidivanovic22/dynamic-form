import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optionPreview'
})
export class OptionPreviewPipe implements PipeTransform {

  transform(value: Object, attributePath: string, ...args: unknown[]): any {
    if (!attributePath) {
      return value;
    }

    if (!attributePath.includes(".")) {
      return value[`${attributePath}`];
    }

    const pathParts = attributePath.split(".");
    while (true) {
      value = value[`${pathParts.splice(0, 1)}`];
      value = value ? value : "";
      if (pathParts.length <= 0) {
        break;
      }
    }
    return value;
  }

}
