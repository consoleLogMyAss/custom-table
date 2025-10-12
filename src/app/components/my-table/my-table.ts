import {Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-my-table',
  imports: [],
  templateUrl: './my-table.html',
  styleUrl: './my-table.scss'
})
export class MyTable {
  public tableData: InputSignal<any[]> = input();
  public columnData: InputSignal<any[]> = input();
}
