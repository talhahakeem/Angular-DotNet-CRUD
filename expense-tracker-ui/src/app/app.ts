import { Component } from '@angular/core';
// RouterOutlet ki zaroorat nahi thi is liye hata diya
import { ExpensesComponent } from './components/expenses/expenses'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExpensesComponent], 
  template: `<app-expenses></app-expenses>`
})
export class App {  // Yahan AppComponent ki bajaye sirf App likhna hai
  title = 'expense-tracker-ui';
}