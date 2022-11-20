<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Assignment 11</title>
    </head>
    <body>
        <!-- 1.) Write a program to display count, from 5 to 15 using a loop in PHP. -->
        <?php 
            for ($i = 5; $i <= 15; $i++) { 
                echo $i . " ";
            } 
        ?>
        <br>
        <!-- 2.) Write a program to calculate factorial of a number using for loop in PHP -->
        <?php
            $factorial = 9;
            $total = 1;
            for ($i = 1; $i <= $factorial; $i++) {
                $total *= $i;
            }
        ?>
        <p>The factorial of <?= $factorial ?> is <?= $total ?><p>

        <!-- 3.) Write a program to find factorial of a number using recursive function in PHP -->
        <?php
            $factorial2 = 5;
            function factorial($num2) {
                if ($num2 <= 1) {
                    return 1;
                } else {
                    return $num2 * factorial($num2 - 1);
                }
            }
        ?>
        <p>The factorial of <?= $factorial2 ?> is <?= factorial($factorial2) ?><p>

        <!-- 4.) calculate and display average temperature -->
        <?php
            $temperatures = [78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76, 63, 75, 76, 73, 68, 62, 73, 72, 65, 74, 62, 62, 65, 64, 68, 73, 75, 79, 73];
            $average = 0;
            $total = 0;
            for ($i = 0; $i <= count($temperatures); $i++) {
                $total += $temperatures[$i];
            }
            $average = $total / count($temperatures);

            sort($temperatures);
        ?>
        <p>The average temperature is <?= $average ?></p>
        <p>The 5 lowest temperatures are 
            <?php
                for ($i = 0; $i <= 4; $i++) {
                    if ($i == 4) {
                        echo "$temperatures[$i]";
                    } else {
                        echo "$temperatures[$i], ";
                    }
                }
            ?>
        </p>
        <p>The 5 highest temperatures are 
            <?php
                for ($i = count($temperatures) - 5; $i <= count($temperatures) - 1; $i++) {
                    if ($i == count($temperatures) - 1) {
                        echo "$temperatures[$i]";
                    } else {
                        echo "$temperatures[$i], ";
                    }
                }
            ?>
        </p>

        <!-- 5.) Write a program to create a pattern -->
        <?php
            for ($i = 0; $i < 8; $i++) {
                echo "<br>";
                for ($j = 0; $j <= $i; $j++) {
                    echo "*";
                }
            }
        ?>
    </body>
</html>