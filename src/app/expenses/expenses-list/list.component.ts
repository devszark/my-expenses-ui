import { Component } from '@angular/core';
import { Expense } from '../../expense';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  expenses?: Expense[];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    // Give me list of all expenses
    // comes from Obsevable - I'm subscribing to Observable from expenseService
    this.expenseService.getExpenses().subscribe(expenses => this.expenses=expenses);
  }

  deleteExpense(expense: Expense): void {
    this.expenseService.deleteExpense(expense);
  }

}
