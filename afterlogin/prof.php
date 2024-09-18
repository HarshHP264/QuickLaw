<?php
include("../validate/connection.php"); 
session_start();
if(!isset($_SESSION['logged-in']) || ($_SESSION['logged-in'] !== 'true') || !isset($_SESSION['userid'])) {
    header("location: ../index.php");
    exit();
}

$idd = $_GET['userid'];

$sqll1 = "SELECT * FROM `userlogin` WHERE `id` = '$idd' ";
$ress1 = mysqli_query($con, $sqll1);
            
if(mysqli_num_rows($ress1) > 0) {
    $roww = mysqli_fetch_array($ress1, MYSQLI_ASSOC);
}

$sq1 = "SELECT `sectionidd`, `score` FROM `result`  WHERE `useridd` = '$idd' ";
$re1 = mysqli_query($con, $sq1);

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

<?php include("header1.php"); ?>

    <section class="section-list">
        <div class="container">
            <h2> Profile Settings </h2>
            <div class="grid-container">
                <div class="grid-item" id="sec=1-5">


                    <img src="img/profile.jpeg" style="width: 200px; height: 200px; border-radius: 50%;"/>
                    <div style="margin-top: 10px; text-align: left;" >
                    <span> <strong>Name - </strong> <?php echo $roww['userfnm']; ?> <span> </br>
                    <span> <strong>Email - </strong> <?php echo $roww['emls']; ?> <span>
                    </div>
                    <!-- <button class="details-button" >More Details</button> -->
                </div>
                <div class="grid-item" style="text-align: left;" >
                    <strong style="color: red;" >Solved Quizzes:</strong>
                    <hr>
                        <?php if(mysqli_num_rows($re1) > 0) { ?>
                            <ul>
                                <?php while($rw = mysqli_fetch_assoc($re1)) { ?>
                                    <li>
                                        <strong><?php echo $rw['sectionidd']; ?></strong>
                                        <p><?php echo $rw['score']."/5 Scored"; ?></p>
                                    </li>
                                <?php } ?>
                            </ul>
                        <?php } else { ?>
                            <p>No quizzes solved yet.</p>
                        <?php } ?>
                    <!-- <button class="details-button">More Details</button> -->
                </div>
            </div>
        </div>
    </section>
    <script src="script.js"></script>
    <?php include("footer.php"); ?>
</body>
</html>
