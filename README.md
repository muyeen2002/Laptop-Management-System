# Laptop Management System
The Laptop Management System is a web application designed to help organizations manage their inventory of laptops efficiently. It supports tracking assignments to employees, scheduling maintenance, and reporting issues. This system improves transparency and efficiency in laptop management.

# Features
## Admin Functionalities
## Dashboard Overview:
View key statistics, including:
Total laptops.
Assigned laptops.
Laptops under maintenance.
Reported issues.
## Laptop Management:
Add, update, or delete laptop records.
Store details like brand, model, serial number, status, and purchase date.
## Employee Management:
Assign laptops to employees.
Reassign or unassign laptops.
Search employees by name or email.
## Maintenance Tracking:
Log maintenance history for laptops.
Track maintenance status and associated costs.
## Issue Management:
View and resolve reported issues.
Update issue status and priority.
Employee Functionalities
## Assigned Laptop View:
View details of assigned laptops, including brand, model, serial number, and condition.
## Request New Laptop:
Submit requests for new laptops via a form.
## Report Issues:
Report problems with laptops, specifying description and priority level.
Track the status of reported issues.
# Additional Features
## Authentication:
Secure login with role-based access (Admin or Employee).
Token-based authentication using JSON Web Tokens (JWT).
## Responsive Design:
Built with Tailwind CSS for a responsive and visually appealing interface.
Search and Filter:
Search and filter by employee name, laptop status, or maintenance status.
## Technologies Used
Frontend
React.js: Framework for building dynamic user interfaces.
Tailwind CSS: Utility-first CSS framework for responsive design.
Lucide Icons: Consistent and lightweight icons for visual enhancements.
Backend
Node.js & Express.js: Server-side framework for handling APIs and business logic.
MySQL: Relational database for managing laptop, employee, and issue records.
Authentication
JWT: Role-based access control to protect resources.
# Project Structure
The project is divided into the following directories for maintainability:
bash
src/
├── components/           # Reusable UI components
│   └── dashboard/        # Dashboard-specific components
│       ├── StatsCard.tsx
│       └── RecentActivity.tsx
├── pages/                # Role-based pages
│   ├── admin/
│   │   └── Dashboard.tsx
│   └── employee/
│       └── Dashboard.tsx
├── services/             # API integration services
└── utils/                # Helper functions and constants
Setup and Installation
Prerequisites
Ensure you have the following installed:

Node.js
MySQL
npm or yarn
Steps to Run Locally
# Clone the Repository:
bash
git clone <repository-url>
cd laptop-management-system
# Setup Backend:
Navigate to the backend directory:
bash
cd backend
npm install
# Configure your database connection in the config.js file.
Start the server:
bash
Copy code
npm start
# Setup Frontend:
Navigate to the frontend directory:
bash
Copy code
cd frontend
npm install
![pl1](https://github.com/user-attachments/assets/bda16aed-1065-4597-8dc3-db3cba3c6020)

# Start the React development server:
bash
Copy code
npm start
![pl2](https://github.com/user-attachments/assets/b0ab1cda-7db8-4fae-943c-4a909685f6f6)

# Database Initialization:

Import the SQL schema provided in the /database folder into your MySQL database.
Access the Application:

Open your browser and go to http://localhost:3000.
APIs Overview
Laptop APIs
Add a laptop: POST /api/laptops
Get all laptops: GET /api/laptops
Update laptop details: PUT /api/laptops/:id
Delete a laptop: DELETE /api/laptops/:id
Employee APIs
Get all employees: GET /api/employees
Assign a laptop: POST /api/employees/assign
Fetch assigned laptops: GET /api/employees/:id/laptops
Maintenance and Issues APIs
Log maintenance: POST /api/maintenance
View maintenance history: GET /api/maintenance
Report an issue: POST /api/issues
# Key Components
Admin Dashboard
Displays an overview of statistics, recent activities, and laptop/employee management options.
Employee Dashboard
Focused on showing laptop details and enabling issue reporting or laptop requests.
# Reusable Components
StatsCard: Displays individual statistics like total laptops, assigned laptops, etc.
RecentActivity: Displays recent system activities for transparency.
# Future Enhancements
Integration with third-party APIs for automated maintenance reminders.
Notification system for employees and admins.
Analytics dashboard for advanced reporting.
Multi-language support for global usage.
