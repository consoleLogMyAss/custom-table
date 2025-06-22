import { Component } from '@angular/core';
import { TableBaseContent } from '../../directives/table-base-content.directive';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'table-head',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './table-head.html',
  styleUrl: './table-head.scss'
})
export class TableHead extends TableBaseContent {}
