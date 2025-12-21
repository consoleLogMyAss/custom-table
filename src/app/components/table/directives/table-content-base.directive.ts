import {
  AfterContentInit,
  computed,
  contentChildren,
  Directive,
  inject,
  Signal,
  TemplateRef,
} from '@angular/core';

import {ISimple, ITableConfig} from '../interfaces';
import { TABLE_PARENT } from '../tokens';
import { TColumnData } from '../types';
import { CellTemplateDirective } from './cell-template.directive';

@Directive()
export class TableContentBase<T extends ISimple<any> = ISimple<any>> implements AfterContentInit {
  public tableParent: ITableConfig<T> = inject<ITableConfig<T>>(TABLE_PARENT);

  public templatesQuery: Signal<readonly CellTemplateDirective[]> =
    contentChildren(CellTemplateDirective);

  protected templatesMap: Map<string, TemplateRef<unknown>> = new Map();

  protected columnData: Signal<TColumnData[]> = computed(() => {
    return this.tableParent.columnData();
  });

  protected tableData: Signal<T[]> = computed(() => {
    return this.tableParent.tableData();
  });

  protected noFilterResults: Signal<boolean> = computed(() => {
    return this.tableParent.filtered() && this.tableParent.tableData()?.length === 0;
  });

  ngAfterContentInit(): void {
    this.initTemplatesMap();
  }

  private initTemplatesMap(): void {
    if (this.templatesQuery().length > 0) {
      this.templatesQuery().forEach((cellTemplate: CellTemplateDirective) => {
        this.templatesMap.set(cellTemplate.field(), cellTemplate.templateRef);
      });
    }
  }
}
