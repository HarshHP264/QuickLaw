<?php
    include("../validate/connection.php");
    $sec = $_GET['sec'];
    $type = $_GET['type'];
    $which = $_GET['which'];
    $i = $_GET['userid'];
    
    session_start();
    if(!isset($_SESSION['logged-in']) || ($_SESSION['logged-in'] !== 'true') || !isset($_SESSION['userid']) || ($i == 'false') || ($i == 'undefined')) {
        header("location: login.php?which=$which&sec=$sec&type=$type&userid=$i");
        exit();
    }

    $idd = $_SESSION['userid'];
    
    if($sec && $type) {
        $file = $type . "-sec" . $sec . ".csv";

        if($which == "crim") {
            $filenm = "../quizzes/criminalquiz/" . $file;
        } elseif($which == "fam") {
            $filenm = "../quizzes/familyquiz/" . $file;
        } elseif($which == "civ") {
            $filenm = "../quizzes/civilquiz/" . $file;
        }
        $questions = [];

        if(($handle = fopen($filenm, 'r')) !== false) {
            $header = fgetcsv($handle);
            while(($data = fgetcsv($handle)) !== false) {
                $questions[] = [
                    'question' => $data[0],
                    'options' => array_slice($data, 1, 4),
                    'answer' => $data[5]
                ];
            }
            fclose($handle);
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

<?php include("header1.php"); ?>

    <section class="section-list">
        <div class="container">
            <h2>Quuiz</h2>
            <ul>
                <li>
                    <form method="post">
                        <?php foreach ($questions as $index => $q): ?>
                            <fieldset>
                                <legend>Question <?php echo $index + 1; ?>:</legend>
                                <p><?php echo htmlspecialchars($q['question']); ?></p>
                                <?php foreach ($q['options'] as $i => $option): ?>
                                    <label>
                                        <input type="radio" name="q<?php echo $index + 1; ?>" value="<?php echo htmlspecialchars($option); ?>" required>
                                        <?php echo htmlspecialchars($option); ?>
                                    </label><br>
                                <?php endforeach; ?>
                            </fieldset>
                        <?php endforeach; ?>
                        
                        <button type="submit" style="margin-top: 15px;" > Submit </button>
                    </form>
                    <?php 

                        if($_SERVER["REQUEST_METHOD"] == "POST") {

                            $score = 0;
                            foreach($questions as $index => $q) {
                                $questionIndex = $index + 1;
                                if((isset($_POST["q$questionIndex"]) && $_POST["q$questionIndex"] == $q["answer"])) {
                                    $score++;
                                }
                            }
                            $section = $type . "-sec" . $sec . $which;

                            $check = "SELECT * FROM `result` WHERE `useridd`='$idd' AND `sectionidd`='$section' ";
                            $resultt = mysqli_query($con, $check);

                            if(mysqli_num_rows($resultt) > 0) {
                                $sqlupdt = "UPDATE `result` SET `score` = '$score' WHERE `useridd`='$idd' AND `sectionidd`='$section' ";
                                if(mysqli_query($con, $sqlupdt)) {
                                    echo "<script> alert('Quiz Succeessfully Submitted!!!'); window.location.href = 'prof.php?userid=$idd' </script>";
                                }
                            } else {
                                $sql2 = "INSERT INTO `result` (`useridd`, `sectionidd`, `score`) VALUES ('$idd', '$section', '$score') ";

                                if(mysqli_query($con, $sql2)) {
                                    echo "<script> alert('Quiz Succeessfully Submitted!!!'); window.location.href = 'prof.php?userid=$idd' </script>";
                                    
                                }
                            }

                        }
                    ?>
            </ul>
        </div>
    </section>

    <?php include("footer.php"); ?>
</body>
</html>