import { Component } from '@angular/core';
import { Expense } from '../expense';
import { EXPENSES } from '../mock-expenses';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  expense: Expense = { id: 0, amount: 1, price: 0, name: '', group: '', desc: '' };

  constructor(private expenseService: ExpenseService) { }

  addExpense(e: Expense): void {
    this.expenseService.addExpense(e);
    //console.log(`AddExpenseComponent:addExpense - new expense to be added: ${JSON.stringify(e)}`);
  }

}
