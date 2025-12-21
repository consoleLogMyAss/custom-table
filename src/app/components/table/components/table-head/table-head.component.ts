import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TableContentBase } from '../../directives/table-content-base.directive';
import { ISimple } from '../../interfaces';

@Component({
  selector: 'table-head',
  imports: [NgTemplateOutlet],
  templateUrl: './table-head.component.html',
  styleUrl: './table-head.component.scss',
  host: {
    '[class.no-filter-results]': 'noFilterResults()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableHeadComponent<
  T extends ISimple<any> = ISimple<any>,
> extends TableContentBase<T> {}
