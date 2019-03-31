<?php
include "database.php";
// Get the posted data.
$postdata = file_get_contents("php://input");

$email = mysqli_real_escape_string($conn,$_REQUEST['e']);
$password = mysqli_real_escape_string($conn,$_REQUEST['p']);
$sql = "INSERT INTO profile (email, password)
VALUES ('$email' , '$password')";

if ( $conn->query($sql) === true ) {
    http_response_code(201);

} else {
    echo "ERROR: Could not able to execute $sql. " .$conn->error;
}
$conn->close();
?>