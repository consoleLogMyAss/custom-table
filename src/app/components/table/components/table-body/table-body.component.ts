import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TableContentBase } from '../../directives/table-content-base.directive';
import { TableBodyImports } from './imports';
import { ISimple } from '../../interfaces';

@Component({
  selector: 'table-body',
  imports: TableBodyImports,
  templateUrl: './table-body.component.html',
  styleUrl: './table-body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableBodyComponent<T extends ISimple<any> = ISimple<any>> extends TableContentBase<T> {
  protected rowSelect(data: T): void {
    if (!this.tableParent.rowClickable()) return;

    this.tableParent.rowSelect.emit(data);
  }
}
