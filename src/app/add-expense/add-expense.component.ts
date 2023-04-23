import { Component } from '@angular/core';
import { Expense } from '../expense';
import { EXPENSES } from '../mock-expenses';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  expense: Expense = EXPENSES[3];
}
