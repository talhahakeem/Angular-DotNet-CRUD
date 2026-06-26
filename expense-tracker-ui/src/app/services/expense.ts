import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseRecord } from '../models/expense.model'; 

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiUrl = 'https://localhost:7166/api/Expenses'; 

  constructor(private http: HttpClient) { }

  getExpenses(): Observable<ExpenseRecord[]> {
    return this.http.get<ExpenseRecord[]>(this.apiUrl);
  }

  addExpense(expense: ExpenseRecord): Observable<ExpenseRecord> {
    return this.http.post<ExpenseRecord>(this.apiUrl, expense);
  }

  // NAYA: Expense ko Settle (Update) karne ke liye
  updateExpense(id: number, expense: ExpenseRecord): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, expense);
  }

  // NAYA: Expense ko Delete karne ke liye
  deleteExpense(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}