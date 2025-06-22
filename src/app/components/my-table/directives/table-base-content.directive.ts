import {AfterContentInit, computed, contentChildren, Directive, inject, Signal, TemplateRef} from '@angular/core';
import {MyTable} from '../my-table';
import {CellTemplateDirective} from './cell-template.directive';

@Directive()
export class TableBaseContent implements AfterContentInit{
  public tableParent: MyTable = inject(MyTable);

  public templatesQuery: Signal<readonly CellTemplateDirective[]> = contentChildren(CellTemplateDirective)
  protected templatesMap: Map<string, TemplateRef<unknown>> = new Map();

  ngAfterContentInit() {
    if (this.templatesQuery().length > 0) {
      this.templatesQuery().forEach(cellTemplate => {
        this.templatesMap.set(cellTemplate.field(), cellTemplate.templateRef)
      })
    }
  }

  protected  tableColumnData: Signal<any> = computed(() => {
    return Object.entries(this.tableParent.createTableColumnData());
  })

  protected tableData: Signal<any> = computed(() => {
    return this.tableParent.tableData();
  })
}
