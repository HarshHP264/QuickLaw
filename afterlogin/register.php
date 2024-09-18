<?php
    $sec = $_GET['sec'];
    $type = $_GET['type'];
    $which = $_GET['which'];
    $usr = $_GET['userid'];

?>

<?php
    include("../validate/connection.php");
    session_start();
    $_SESSION["logged-in"] = 'false';

    if($_SERVER['REQUEST_METHOD'] == 'POST') {

        if($_POST['username'] != "" && $_POST['email'] != "" && $_POST['password'] != "" && $_POST['fullnm'] != "") {
            $usrnm = $_POST['username'];
            $pasw = $_POST['password'];
            $eml = $_POST['email'];
            $nm = $_POST['fullnm'];

            $sql1 = "SELECT * FROM `userlogin` WHERE `usernames` = '$usrnm'";
            $res1 = mysqli_query($con, $sql1);
            
            $sql2 = "SELECT * FROM `userlogin` WHERE `emls` = '$eml'";
            $res2 = mysqli_query($con, $sql2);

            if(mysqli_num_rows($res1) > 0) {
                $message = "Username Already Exists...";
            } elseif(mysqli_num_rows($res2) > 0) {
                $message = "Email Already Exists...";
            } else {
                $sql = "INSERT INTO `userlogin`(`usernames`, `passwrds`, `emls`, `userfnm`) VALUES ('$usrnm', '$pasw', '$eml', '$nm')";
           
                if(mysqli_query($con, $sql)) {
                    header("location: login.php?which=$which&sec=$sec&type=$type&userid=$usr");
                    exit();
                } else {
                    $message = "Error...";
                }
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

    <section class="form-section">
        <div class="form-container">
            <h2>Register</h2>
            <?php if (!empty($message)): ?>
                <p style="color: red;"><strong><?php echo $message; ?></strong></p>
            <?php endif; ?>
            <form method="POST">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>

                <label for="userfullnm">Name:</label>
                <input type="text" id="fullnm" name="fullnm" required>

                <button type="submit" name="submit">Register</button>

                
                <a href="login.php<?php echo "?which=".$which."&sec=".$sec."&type=".$type."&userid=".$usr; ?>" class="styled-button" style="margin-top: 20px;"> Login </a>
            </form>
        </div>
    </section>

    <?php include("footer.php"); ?>

</body>
</html>
