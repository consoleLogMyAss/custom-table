import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colWidth',
})
export class ColWidthPipe implements PipeTransform {
  transform(value: number | string): string {
    if (typeof value === 'number') {
      return `${value}px`;
    }

    if (/^[0-9]+(\.[0-9]+)?$/.test(value)) {
      return `${value}px`;
    }

    if (/^[0-9]+(\.[0-9]+)?(px|%|rem|em|vw|vh|fr|dvh|dvw)$/.test(value)) {
      return value;
    }

    console.warn(`Invalid width value: ${value}`);

    return value;
  }
}
