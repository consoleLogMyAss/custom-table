import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

import { TColumnData } from '../../types';
import { TableColgroupImports } from './imports';

@Component({
  selector: 'table-colgroup',
  imports: TableColgroupImports,
  templateUrl: './table-colgroup.component.html',
  styleUrl: './table-colgroup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableColgroupComponent {
  public columnData: InputSignal<TColumnData[]> = input([]);
}
