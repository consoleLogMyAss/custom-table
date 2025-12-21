import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';

import { TableImports } from './imports';
import {ISimple, ITableConfig} from './interfaces';
import { TABLE_PARENT } from './tokens';
import { TColumnData } from './types';

@Component({
  selector: 'my-table',
  imports: TableImports,
  providers: [
    {
      provide: TABLE_PARENT,
      useExisting: TableComponent,
    },
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T extends ISimple<any> = ISimple<any>> implements ITableConfig<T> {
  public tableData: InputSignal<T[]> = input.required();
  public columnData: InputSignal<TColumnData[]> = input.required();

  public rowClickable: InputSignal<boolean> = input(false);
  public loading: InputSignal<boolean> = input(false);
  public filtered: InputSignal<boolean> = input(false);
  public noDataText: InputSignal<string> = input('Nothing here yet');
  public noFilterResultsText: InputSignal<string> = input('No results found for selected filters');

  public rowSelect: OutputEmitterRef<T> = output();
}
