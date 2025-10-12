import { Component } from '@angular/core';
import { MyTable} from './components/my-table/my-table';
import { TableHead } from './components/my-table/components/table-head/table-head';
import { TableBody } from './components/my-table/components/table-body/table-body';
import { CellTemplateDirective } from './components/my-table/directives/cell-template.directive';

@Component({
  selector: 'app-root',
  imports: [
    MyTable,
    TableHead,
    TableBody,
    CellTemplateDirective
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected tableData = [
    {name: 'Ivan', age: 32, country: 'Russia', email: 'ivan@gmail.com', job: 'Frontend Development'},
    {name: 'Maria', age: 27, country: 'Spain', email: 'maria.lopez@yahoo.com', job: 'UI/UX Designer'},
    {name: 'John', age: 45, country: 'USA', email: 'john.doe@outlook.com', job: 'Backend Developer'},
    {name: 'Aiko', age: 30, country: 'Japan', email: 'aiko.nakamura@mail.jp', job: 'Fullstack Developer'},
    {name: 'Liam', age: 29, country: 'Canada', email: 'liam.smith@gmail.com', job: 'DevOps Engineer'},
    {name: 'Elena', age: 38, country: 'Ukraine', email: 'elena.kiev@gmail.com', job: 'Project Manager'},
    {name: 'Ahmed', age: 41, country: 'Egypt', email: 'ahmed.saleh@protonmail.com', job: 'QA Engineer'},
    {name: 'Chloe', age: 26, country: 'France', email: 'chloe.paris@icloud.com', job: 'Product Owner'},
    {name: 'Mateo', age: 34, country: 'Argentina', email: 'mateo.buenos@gmail.com', job: 'Mobile Developer'},
    {name: 'Fatima', age: 31, country: 'Morocco', email: 'fatima.rabat@outlook.com', job: 'Business Analyst'}
  ];

  protected columnData = [
    {
      title: '№',
      field: 'index',
    },
    {
      title: 'Name',
      field: 'name',
    },
    {
      title: 'Age',
      field: 'age',
    },
    {
      title: 'Country',
      field: 'country',
    },
    {
      title: 'Email',
      field: 'email',
    },
    {
      title: 'Job',
      field: 'job',
    },
  ];
}
