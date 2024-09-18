<?php
    session_start();
    
    $_SESSION["logged-in"] = 'false';
    session_destroy();

    header("location: ../index.php");
    exit();
?>