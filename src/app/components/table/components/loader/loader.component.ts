import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

import { LoaderImports } from './imports';

type TMode = 'blurred' | 'default';

@Component({
  selector: 'ui-loader',
  imports: LoaderImports,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  public mode: InputSignal<TMode> = input<TMode>('default');
}
