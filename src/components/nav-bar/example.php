<?php

session_start();

//Get IP address
// code goes here

$loginDate = date("Y-m-d H:i:s");
$Error ="";
$successMessage ="";

if(($_REQUEST['captcha'] == $_SESSION['vercode'])){
    //captcha code goes here

    if (isset($_POST['submit'])){
        if ( !( $_POST['username'] == "" && $_POST['password'] == "")){
            //submit form codes goes here

            if (filter_var($username, FILTER_VALIDATE_INT)){
                $con=mysqli_connect("localhost","root","","test");
                $result = mysqli_query($con, "SELECT * FROM Users WHERE username='$username' AND password='$password'");
                $loginAttempt = mysqli_query($con, "SELECT * FROM Logs WHERE username='$username'");
                $data = mysqli_fetch_row($result);

                if(count($data)>0){
                    $_SESSION['login_user']=$username;
                    mysqli_query($con, "INSERT INTO `test`.`Logs`(`username`, `lastLogin`, `ipAddress`, `captcha`)
                            VALUES('$username', '$loginDate', '$ipaddress', '$captcha')
                            ON DUPLICATE KEY UPDATE `username` = '$username', `lastLogin` = '$loginDate'");
                    header('Location: privatepage.php');
                } else {
                    $Error ="Invalid Contract Number or Password";
                }
                mysqli_close($con);
            }     else {
                $Error ="Invalid Contract Number";
            }

            if (($data['username'] == $username) || ($data['password'] == $password)) {
                $loginAttempt = mysqli_query($con, "UPDATE Logs SET loginAttempt = 0 WHERE username='$username'");
                mysqli_close($con);
            } else {
                if ($loginAttempt >= 3) {
                    echo 'Sorry your account has been lock out. Please contact the administrator';
                } else {
                    mysqli_query($con, "UPDATE Logs SET loginAttempt = loginAttempt +1 WHERE username= '$username'");
                }
            }
        }
    }
}