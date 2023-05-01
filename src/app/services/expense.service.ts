import { Injectable } from '@angular/core';
import { Expense } from '../expense';
import { EXPENSES } from './mock-expenses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  getExpenses(): Observable<Expense[]> {
    const heroesObservable = of(EXPENSES);
    return heroesObservable;
  }

  // getExpense(id: number): Observable<Expense> {
  //   return of(EXPENSES[id]);
  // }

  addExpense(newExpense: Expense): void {
    EXPENSES.push(newExpense);
    console.log(`ExpenseService:addExpense - new expense to be added: ${JSON.stringify(newExpense)}`);
  }

  deleteExpense(e: Expense): void {
    console.log(`ExpenseService:deleteExpense - expense to be removed: ${JSON.stringify(e)}`);
  }

}
