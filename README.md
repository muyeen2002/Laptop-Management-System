# Laptop-Management-System
This project provides an inventory management system for laptops, allowing organizations to track laptop assignments, maintenance schedules, and issue reports effectively.

# Features
## Admin Dashboard:
View total laptops, assigned laptops, laptops under maintenance, and reported issues.
Manage laptop inventory (add, update, delete laptops).
Assign/unassign laptops to employees.
Monitor recent activity logs.
## Employee Dashboard:
View assigned laptops and their details.
Request a new laptop.
Report issues with priority levels.
## Technologies Used
Frontend: React.js, Tailwind CSS, Axios.
Backend: Node.js, Express.js.
Database: MySQL.
Icons: Lucide Icons.
Authentication: JSON Web Tokens (JWT).
## Getting Started
## 1. Clone the Repository
bash
git clone <repository-url>
cd laptop-management-system
## 2. Backend Setup
Navigate to the backend folder:
bash
cd backend
npm install
Configure the database connection in config.js.
Start the server:
bash
npm start
## 3. Frontend Setup
Navigate to the frontend folder:
bash
cd frontend
npm install
Start the React development server:
bash
npm start
![pl1](https://github.com/user-attachments/assets/c930bc66-d872-42f7-b0e4-cab68f40b3c6)
![pl2](https://github.com/user-attachments/assets/ef78091d-262a-40bd-a909-afb365f592e7)
## 4. Database Setup
Import the provided SQL schema into your MySQL database.
Components Overview
Admin Dashboard
StatsCard: Displays statistics with icons for quick insights.
RecentActivity: Shows the latest activities, such as laptop assignments or issue reports.
Employee Dashboard
Assigned Laptops: Displays laptops assigned to the employee.
Issue Reporting: Allows employees to report issues via a form.
Testing the Application
Default role: Admin
Modify the role in Login.tsx to "employee" for employee-specific views.
## Folder Structure
css
Copy code
src/
├── components/
│   └── dashboard/
│       ├── StatsCard.tsx
│       └── RecentActivity.tsx
├── pages/
│   ├── admin/
│   │   └── Dashboard.tsx
│   └── employee/
│       └── Dashboard.tsx
Live Demo
Run the development server with:
bash

npm run dev
Access the application at http://localhost:3000.
