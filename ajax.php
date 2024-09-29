<!doctype html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/jquery.toast.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="assets/js/jquery.toast.min.js"></script>
    <title>آموزش کاربردی jquery - ajax</title>
</head>
<body>
<script>
    $.toast({
        text: "Don't forget to star the repository if you like it.",
        icon: 'success',
        showHideTransition: 'slide',
        allowToastClose: false,
        hideAfter: 3000,
        stack: 5,
        position: 'top-left',

        textAlign: 'right',
        loader: true,
        loaderBg: '#344cf0',
    })

</script>
<section>
    <form action="" method="POST" id="login-form" data-csrf="fd454ewrt43">
        <div class="alert"><p>متن آزمایشی!</p></div>
        <label for="username">نام کاربری</label>
        <input type="text" id="username" name="username">
        <label for="password">کلمه عبور</label>
        <input type="password" id="password" name="password">
        <input type="hidden" value="fd454ewrt43" name="csrf">
        <button id="submit" type="submit" class="btn-success"> ورود <i class="fas fa-spinner fa-spin loading"></i></button>
    </form>
    <br>
    <div class="social-login-wrapper">
        <div class="social-login">ورود توسط شبکه های اجتماعی</div>
<!--        <a href="" class="social-login">ورود توسط شبکه های اجتماعی</a>-->
        <div class="panel">
            <i class="fab fa-github"></i>
            <i class="fab fa-google"></i>
        </div>
    </div>
</section>
<script src="assets/js/main.js"></script>
</body>
</html>