import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './expenses/expenses-list/list.component';
import { AddExpenseComponent } from './expenses/add-expense/add-expense.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  // { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddExpenseComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
