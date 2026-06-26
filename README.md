# Full-Stack CRUD Implementation: Angular & ASP.NET Core Web API

A professional and clean implementation of Full-Stack CRUD (Create, Read, Update, Delete) operations, demonstrating decoupled architecture, asynchronous data flow, and relational data persistence. This project serves as a hands-on exercise in connecting a modern reactive frontend with a robust backend API.

## 🚀 Tech Stack

- **Frontend:** Angular 17+ (Standalone Components, Reactive Data Binding)
- **Backend:** ASP.NET Core Web API (RESTful Architecture)
- **Database:** SQL Server (Relational Storage)
- **Data Access:** Entity Framework Core

---

## 💡 Key Engineering Highlights & Learning Objectives

- **Decoupled Architecture:** Implemented a completely separated frontend and backend system interacting seamlessly via secure HTTP protocols.
- **Asynchronous Data Flow:** Utilized Angular Services and RxJS Observables to handle asynchronous API requests (`GET`, `POST`, `PUT`, `DELETE`).
- **State & Change Detection:** Managed dynamic UI rendering using Angular's explicit change detection (`ChangeDetectorRef`) to ensure the view stays synchronized with the backend state.
- **CORS & Environment Setup:** Configured and resolved local Cross-Origin Resource Sharing (CORS) policies and SSL boundaries between the Node.js development server and the .NET hosting environment.

---

## 🛠️ Features Implemented

- **Create:** Add new expense entries with strict frontend validation.
- **Read:** Fetch and render relational data dynamically into a premium dashboard grid.
- **Update:** Complete lifecycle handling for record editing, along with an instant status toggle (Pending ⏳ to Settled ✔).
- **Delete:** Safe removal of records from the SQL Server database with user confirmation dialogs.

---

## 📂 Project Structure

```text
FullStack-CRUD-Project/
│
├── expense-tracker-ui/     # Angular Frontend Application
└── ExpenseTrackerAPI/      # ASP.NET Core Web API Backend
```
⚙️ How to Run Locally
1. Backend Setup (.NET Core)
Open the backend project folder in Visual Studio or VS Code.

Update the connection string in appsettings.json to match your local SQL Server instance.

Run Update-Database in the Package Manager Console to apply migrations.

Start the application (runs on https://localhost:7166 by default).

2. Frontend Setup (Angular)
Navigate to the expense-tracker-ui directory.

Run npm install to restore dependencies.

Start the local development server using ng serve.

Open http://localhost:4200 in your browser.
