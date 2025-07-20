 User Status Management

## Description
This project is a simple PHP and MySQL web application that allows users to be added to a database, displayed in a table, and have their status toggled between 0 and 1 using a button.

## Setup

### 1. Install XAMPP:
   - Download and install XAMPP from [XAMPP Website](https://www.apachefriends.org/index.html).
   - Start Apache and MySQL from the XAMPP Control Panel.

### 2. Create Database:
   - Open phpMyAdmin: http://localhost/phpmyadmin/
   - Create a new database called task_web (or another name of your choice).
   - Create a table users with columns: id, name, age, status.

### 3. Set Up Project Files:
   - Place project files in the htdocs directory (`C:\xampp\htdocs\`).
   - Ensure the database name in db.php matches your created database:
    
     $dbname = "task_web";
     
### 4. Run the Project:
   - Open the browser and visit: http://localhost/github_task/index.html
   - You can add users, see them in a table, and toggle their status.

## Files
- `db.php`: Connects to the database.
- `fetch.php`: Fetches user data from the database.
- `insert.php`: Adds users to the database.
- `fetch.js`: Loads data dynamically to the page.
- `update.php`: Toggles the user status.
- `style.css`: Basic styling for the page.
