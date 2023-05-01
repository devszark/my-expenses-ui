import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ListComponent } from './expenses/expenses-list/list.component';
import { AddExpenseComponent } from './expenses/add-expense/add-expense.component';
import { ReportsComponent } from './reports/reports.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    ListComponent,
    AddExpenseComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
