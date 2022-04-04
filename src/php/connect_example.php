<?php
    //Rename to 'connect.php' if using this to access a MySQL databse 
    //with other credentials.
   // Create connection
   $conn = new mysqli('localhost','username','password', 'username');


   // Check connection
   if (!$conn) {
      die("Connection failed: " . mysqli_connect_error()); 
   }
?>