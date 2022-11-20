<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="./etc/assignment5styles.css"> <!-- External Style Sheet -->
        <title>Assignment 5</title>
    </head>
    <?php
        $first_num = $_POST['first_num'];
        $second_num = $_POST['second_num'];
        $operator = $_POST['operator'];
        $result = '';

        switch($operator) {
            case "add":
                $result = $first_num + $second_num;
                break;
            case "subtract":
                $result = $first_num - $second_num;
                break;
        }

    ?>
    <body>
        <form action="" method="POST">
            <p>
                <input type="number" name="first_num" id="first_num" value="">
                <b>first number</b>
            </p>

            <p>
                <input type="number" name="second_num" id="second_num" value="">
                <b>second number</b>
            </p>
            <p>
                <input name="result" readonly="readonly" value="<?= $result ?>">
                <b>Result</b>
            </p>
            <input type="submit" name="operator" value="add">
            <input type="submit" name="operator" value="subtract">
        </form>
    </body>
</html>