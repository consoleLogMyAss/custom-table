import { InputSignal, OutputEmitterRef } from '@angular/core';

import { TColumnData } from '../types';

export interface ITableConfig<T extends ISimple<any> = ISimple<any>> {
  columnData: InputSignal<TColumnData[]>;
  filtered: InputSignal<boolean>;
  loading: InputSignal<boolean>;
  noDataText: InputSignal<string>;
  noFilterResultsText: InputSignal<string>;
  rowClickable: InputSignal<boolean>;
  tableData: InputSignal<T[]>;

  rowSelect: OutputEmitterRef<T>;
}

export interface ISimple<T = unknown> {
  [key: string]: T;
}
