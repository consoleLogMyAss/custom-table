import { InjectionToken } from '@angular/core';

import { ITableConfig } from '../interfaces';

export const TABLE_PARENT = new InjectionToken<ITableConfig>('TABLE_PARENT');
