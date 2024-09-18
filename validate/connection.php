<?php
    $db = 'laws';
    $usernmm = 'root';
    $pasww = '';

    $con = mysqli_connect("localhost", $usernmm, $pasww, $db);
    
    if(!($con)){
        $message = "Connect error...";
    }

?>