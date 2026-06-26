import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { ExpenseService } from '../../services/expense'; 
import { ExpenseRecord } from '../../models/expense.model'; 

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './expenses.html', 
  styleUrls: ['./expenses.css']
})
export class ExpensesComponent implements OnInit {
  expensesList: ExpenseRecord[] = [];
  
  newExpense: ExpenseRecord = {
    description: '',
    totalAmount: 0,
    paidBy: '',
    isSettled: false
  };

  // NAYE VARIABLES: Edit feature ke liye
  isEditMode: boolean = false;
  currentEditId: number | undefined;

  constructor(
    private expenseService: ExpenseService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe({
      next: (data: any) => {
        this.expensesList = data;
        this.cdr.detectChanges(); 
      },
      error: (err: any) => console.error('Error fetching data: ', err)
    });
  }

  // UPDATE WALA FUNCTION: Ye form submit hone par chalega
  saveExpense(): void {
    if(!this.newExpense.description || this.newExpense.totalAmount <= 0 || !this.newExpense.paidBy) {
      alert('Please fill all fields correctly!');
      return;
    }

    if (this.isEditMode && this.currentEditId) {
      // PROPER UPDATE LOGIC (PUT Request)
      this.expenseService.updateExpense(this.currentEditId, this.newExpense).subscribe({
        next: () => {
          this.loadExpenses(); 
          this.resetForm();
        },
        error: (err: any) => console.error('Error updating: ', err)
      });
    } else {
      // ADD LOGIC (POST Request)
      this.expenseService.addExpense(this.newExpense).subscribe({
        next: () => {
          this.loadExpenses(); 
          this.resetForm();
        },
        error: (err: any) => console.error('Error saving: ', err)
      });
    }
  }

  // NAYA FUNCTION: Edit button dabane par table ka data form mein lane ke liye
  editExpense(exp: ExpenseRecord): void {
    this.isEditMode = true;
    this.currentEditId = exp.id;
    this.newExpense = { ...exp }; // Record ko form mein copy kar diya
  }

  // NAYA FUNCTION: Edit cancel karne ke liye
  resetForm(): void {
    this.isEditMode = false;
    this.currentEditId = undefined;
    this.newExpense = { description: '', totalAmount: 0, paidBy: '', isSettled: false };
  }

  settleExpense(expense: ExpenseRecord): void {
    if(!expense.id) return;
    const updatedExpense = { ...expense, isSettled: true }; 
    this.expenseService.updateExpense(expense.id, updatedExpense).subscribe({
      next: () => this.loadExpenses(), 
      error: (err: any) => console.error('Error settling: ', err)
    });
  }

  deleteExpense(id: number | undefined): void {
    if(!id) return;
    if(confirm('Are you sure you want to delete this expense?')) {
      this.expenseService.deleteExpense(id).subscribe({
        next: () => this.loadExpenses(), 
        error: (err: any) => console.error('Error deleting: ', err)
      });
    }
  }
}