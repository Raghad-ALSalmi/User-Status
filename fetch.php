<?php
include('db.php');

// استعلام لاسترجاع البيانات
$sql = "SELECT * FROM users";  // استبدل 'users' باسم الجدول الذي ترغب في استرجاع بياناته
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . " - Email: " . $row["email"] . "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>