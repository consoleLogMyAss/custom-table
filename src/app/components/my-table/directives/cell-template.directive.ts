import {Directive, inject, input, InputSignal, TemplateRef} from '@angular/core';

@Directive({ selector: 'ng-template[field]', standalone: true })
export class CellTemplateDirective {
  public field: InputSignal<any> = input();

  public templateRef: TemplateRef<any> = inject(TemplateRef);
}
