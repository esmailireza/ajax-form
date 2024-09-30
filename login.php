<?php

if (isset($_POST['username']) && isset($_POST['password'])) {
    echo json_encode([
        'success'=>true,
        'message'=>'Login Successful',
        'status'=>200,
    ]);
    
}else {
    echo json_encode([
        'success'=>false,
        'message'=>'Login failed',
        'status'=>404,
    ]);
}

