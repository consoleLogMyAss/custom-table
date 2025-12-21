import { Type } from '@angular/core';

import { TableBodyComponent } from '../components/table-body/table-body.component';
import { TableColgroupComponent } from '../components/table-colgroup/table-colgroup.component';
import { TableHeadComponent } from '../components/table-head/table-head.component';

export const TableImports: Type<unknown>[] = [
  TableHeadComponent,
  TableBodyComponent,
  TableColgroupComponent,
];
