import { NgTemplateOutlet } from '@angular/common';
import { Type } from '@angular/core';

import { LoaderComponent } from '../../loader/loader.component';

export const TableBodyImports: Type<unknown>[] = [
  NgTemplateOutlet,
  LoaderComponent,
];
