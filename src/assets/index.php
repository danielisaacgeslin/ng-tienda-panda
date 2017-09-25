<?php
     header("Access-Control-Allow-Origin: *");

    $files = glob('*');
    foreach($files as $key => $value) {
        if(strpos($value, '.php') !== false || strpos($value, '.') === false) {
            unset($files[$key]);
        }
    }
    echo json_encode($files);
?>