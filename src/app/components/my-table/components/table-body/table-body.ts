import { Component } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { TableBaseContent } from '../../directives/table-base-content.directive';

@Component({
  selector: 'table-body',
  imports: [NgTemplateOutlet],
  templateUrl: './table-body.html',
  styleUrl: './table-body.scss'

})
export class TableBody extends TableBaseContent {}
