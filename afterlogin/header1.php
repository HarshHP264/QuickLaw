<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    
<header>
    <div class="header-content">
        <div class="header-left">
            <a href="../index.php" class="styled-button">Home</a> 
        </div>
       
        <!-- Center area can be a logo, title, or something else -->
        <div class="header-center">
           <!-- You can place a logo or title here if needed -->
        </div>

        <div class="header-right">
            <a href="prof.php?userid=<?php echo $idd; ?>" class="styled-button" >Profile</a>
            <a href="logout.php" class="styled-button">Logout</a>
        </div>
    </div>
</header>