<?php
    include("../validate/connection.php");
    
    session_start();
    if(isset($_SESSION['userid'])) {
        $idd = $_SESSION['userid'];
    } else{
        $idd ='false';
    }
    $_SESSION["logged-in"] = 'false';

    if($_SERVER['REQUEST_METHOD'] == 'POST') {

        if($_POST['username'] != "" && $_POST['password'] != "") {
            $usrnm = $_POST['username'];
            $pasw = $_POST['password'];

            $sql1 = "SELECT * FROM `userlogin` WHERE `usernames` = '$usrnm' AND `passwrds` = '$pasw'";
            $res1 = mysqli_query($con, $sql1);
            
            if(mysqli_num_rows($res1) > 0) {
                $row = mysqli_fetch_array($res1, MYSQLI_ASSOC);
                $_SESSION["logged-in"] = "true";
                $_SESSION['userid'] = $row['id'];

                header("location: ../criminal_sections.php?which=crim");
                exit();
            } else {
                $_SESSION["logged-in"] = "false"; 
                header("location: login.php?which=$which&sec=$sec&type=$type&userid=$usr");
                exit();
            }
        }

    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>

    <section class="login-section">
        <div class="login-container">
            <h2>Login</h2>
            <form method="post">
                <label for="username">Username: </label>
                <input type="text" id="username" name="username" required>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <button type="submit" name="lgnn" onclick="" >Login</button>
            </form>
        </div>
    </section>
    
    <?php include("footer.php"); ?>
    
</body>
</html>