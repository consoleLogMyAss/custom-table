import {ISimple} from '../interfaces';

export type TCellTemplateContext<T extends ISimple<any> = ISimple<any>> = {
  $implicit: T;
};

export type TAlign = 'center' | 'left' | 'right';

export type TColumnData = {
  field: string;
  title: string;
  align?: TAlign;
  width?: number | string;
};
