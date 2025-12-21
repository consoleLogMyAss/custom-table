import { Directive, inject, input, InputSignal, TemplateRef } from '@angular/core';

import { TCellTemplateContext } from '../types';

@Directive({
  selector: 'ng-template[field]',
})
export class CellTemplateDirective {
  public field: InputSignal<string> = input();

  public templateRef: TemplateRef<TCellTemplateContext> = inject(TemplateRef);
}
