<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "your_database_name";

// إنشاء الاتصال
$conn = new mysqli($servername, $username, $password, $dbname);

// تحقق من الاتصال
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>