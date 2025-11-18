import {Component, input, InputSignal} from '@angular/core';
import {TableHead} from "./components/table-head/table-head";
import {TableBody} from './components/table-body/table-body';

@Component({
  selector: 'app-my-table',
  imports: [
    TableHead,
    TableBody
  ],
  templateUrl: './my-table.html',
  styleUrl: './my-table.scss'
})
export class MyTable {
  public tableData: InputSignal<any[]> = input();
  public columnData: InputSignal<any[]> = input();
}
