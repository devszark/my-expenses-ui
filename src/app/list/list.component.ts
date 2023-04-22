import { Component } from '@angular/core';
import { Expense } from '../expense';
import { EXPENSES } from '../mock-expenses';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  expenses: Expense[] = EXPENSES;
  
}
