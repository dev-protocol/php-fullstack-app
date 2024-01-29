<?php
session_start();
include("../include/database.php");

$response = ['error' => false];

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);

    if(empty($email) || empty($username) || empty($password)) {
        $response['error'] = true;
        $response['message'] = "All fields are required !";
    } else {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $conn->prepare("INSERT INTO users (email, username, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $email, $username, $hashedPassword);

        try {
            $stmt->execute();

            $_SESSION["username"] = $username;
            $_SESSION['loggedin'] = true;

            
            $id_user = $conn->insert_id;
            $_SESSION['id'] = $id_user;

            $response['redirect'] = "../home/home.php?username=$username&id=$id_user";
        } catch (mysqli_sql_exception $exception) {

            $error_message = $exception->getMessage();

            // Check if the error message contains specific keywords
            if (strpos($error_message, 'Duplicate entry') !== false && strpos($error_message, 'email') !== false) {
                $response['error'] = true;
                $response['message'] = "This email is already taken ❌";
            } 

            elseif (strpos($error_message, 'Duplicate entry') !== false && strpos($error_message, 'username') !== false) {
                $response['error'] = true;
                $response['message'] = "This username is already taken ❌";
            } 
            
            else {
                $response['error'] = true;
                $response['message'] = "An error occurred ❌";
            }
        }

        $stmt->close();
    }
}

$conn->close();
echo json_encode($response);
?>
