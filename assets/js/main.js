let j = jQuery.noConflict();
// events and selectors
/*jQuery(document).ready(function (){
     alert('Hello World!!!');
     var x = 1;
    const z = 'Hello world!!!';
     let y = 2;
     jQuery('#username').hide();
     document.getElementById('username');
     jQuery('input').hide();
     let user_name = jQuery('#username');
     let x = jQuery('input.x')
     user_name.hide();
     let x = jQuery('#username,#password')
     x.hide();
     jQuery('#submit').click(function (event){
         jQuery('#submit').on('click',function (event){
         event.preventDefault();
         jQuery('#submit').hide();
         jQuery(this).hide();
     });
     jQuery('#login-form').change(function (event){
       jQuery('#login-form').on('submit',function (event){
        alert('hi!');
     });

});*/
//effects
/*jQuery(document).ready(function(){
jQuery('#submit').on('click',function (e){
    e.preventDefault();
    // jQuery('.loading').hide();
    // jQuery('.loading').show();
    // jQuery('.loading').fadeIn(5000);
    // jQuery('.loading').fadeOut(3000);

});
jQuery('.social-login').on('click',function (e){
        e.preventDefault();
        //  jQuery('.panel').slideDown();
        //  jQuery('.panel').slideUp();
         jQuery('.panel').slideToggle();


    });
jQuery('.social-login').on('click',function (e){
        // e.preventDefault();
        //  jQuery('.panel').slideDown();
        //  jQuery('.panel').slideUp();
        jQuery('.panel').slideToggle();


    });
jQuery('.animate').on('click',function (e){
        e.preventDefault();
        jQuery('.box').animate({
            right:'200px',opacity:.1,width:'100px',top:'100px'
        });
    });
});*/
//HTMl Get and Set
/*jQuery(document).ready(function(){
    jQuery('#submit').on('click',function (e){
        e.preventDefault();
         let text = $('.alert').text();
        let text = $('.alert').html();
        console.log(text);
        alert(text);
         let username = $('#username').val();
         let password = $('#password').val();
         console.log(username);
         console.log(password);
          $('.alert').text('متن آزمایشی!');
          $('.alert').html('<strong>متن آزمایشی!</strong>');
         $('#username').val('admin');


    });

});*/
//HTMl Add and Remove
/*jQuery(document).ready(function(){
    jQuery('#submit').on('click',function (e){
        e.preventDefault();
         $('.alert').remove();
         $('.alert').empty();
         $('.alert').append('<strong>خطا :</strong>');
         $('.alert').prepend('<strong>خطا :</strong>');

    });
});*/
//HTMl Class and Css
/*jQuery(document).ready(function() {
    jQuery('#switchCheckbox').change(function () {
         if(this.checked){
            jQuery('body').addClass('night');
         }else{
             jQuery('body').removeClass('night');
         }
        jQuery('body').toggleClass('night');
        jQuery('section').toggleClass('night-details');
          jQuery('section').css({

          });
    });
});*/
//Local Storage
/*jQuery(document).ready(function() {

    jQuery('#switchCheckbox').change(function () {
        localStorage.setItem('test','localStorage');
         localStorage.clear('test');
        let x = localStorage.getItem('test');
        console.log(x);
        let data = {
            "night":"night",
            "night_details":"night-details",
            "checked":"checked"
        }
        localStorage.setItem('theme_mode',JSON.stringify(data));
        let return_data = localStorage.getItem('theme_mode');
        if (this.checked){
            // console.log(JSON.parse(return_data).night);
            jQuery('body').addClass(JSON.parse(return_data).night);
            jQuery('section').addClass(JSON.parse(return_data).night_details);
            jQuery(this).attr("checked",JSON.parse(return_data).checked);
        }else {
            localStorage.clear('theme_mode');
            jQuery('body').removeClass(JSON.parse(return_data).night);
            jQuery('section').removeClass(JSON.parse(return_data).night_details);
            jQuery(this).removeAttr("checked");
        }

    });
    if(localStorage.getItem('theme_mode')){
        let return_data = localStorage.getItem('theme_mode');
        jQuery('body').addClass(JSON.parse(return_data).night);
        jQuery('section').addClass(JSON.parse(return_data).night_details);
        jQuery('#switchCheckbox').attr("checked",JSON.parse(return_data).checked);
    }
    });*/
//Traversing
/*
jQuery(document).ready(function() {
    jQuery('span').parent().css("border-color","red");
    jQuery('span').parents().css("border-color","red");
    jQuery('span').parentsUntil('div').css("border-color","red");
    jQuery('div').children('p').css("border-color","blue");
    jQuery('div').find('*').css("border-color","blue");
    jQuery('h3').siblings('h4').css("border-color","blue");
    jQuery('p').next().css("border-color","blue");
    jQuery('span').nextAll().css("border-color","blue");
    jQuery('span').nextUntil('h3').css("border-color","blue");
    jQuery('h6').prev().css("border-color","blue");
    jQuery('h6').prevAll().css("border-color","blue");
    jQuery('h6').prevUntil('h1').css("border-color","blue");
    jQuery('p').first().css("border-color","green");
    jQuery('p').last().css("border-color","green");
    jQuery('p').eq(1).css("border-color","green");
    jQuery('p').filter('#text').css("border-color","green");
    jQuery('p').filter('.user').hide();

});*/
//Ajax
/*j(document).ready(function () {
    j('#login-form').on('submit', function (e) {
        e.preventDefault();
        let el = j(this);
        let loader = j('.loading');
        let btn_submit = j('#submit');
        let username = j('#username').val();
        let password = j('#password').val();
        // let csrf = j('#login-form').data('csrf');
        let csrf = el.data('csrf');
        // console.log(csrf);
        j.ajax({
            url: 'user.php',
            type: 'POST',
            // dataType:JSON,
            data: {
                action: 'do_register',
                username: username,
                password: password,
                csrf: csrf
            },
            beforeSend: function () {
                loader.show();
                btn_submit.text('در حال ارسال');
            },
            success: function (response) {
                // alert('شما با موفقیت وارد شدید در حال انتقال');
                let jsonData = JSON.parse(response);
                if (jsonData.success == true) {
                    // alert(jsonData.message);
                    j.toast({
                        text: jsonData.message,
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
                } else {
                    j.toast({
                        text: jsonData.message,
                        icon: 'error',
                        showHideTransition: 'slide',
                        allowToastClose: false,
                        hideAfter: 3000,
                        stack: 5,
                        position: 'top-left',
                        textAlign: 'right',
                        loader: true,
                        loaderBg: '#344cf0',
                    })
                }
            },
            error: function (error) {
                console.log(error);
                // alert('خطایی در ورود شما به سایت صورت گرفته است');
            },
            complete: function () {
                loader.hide();
                btn_submit.text('ورود');
            },
        });
    });
});*/

/*j(document).ready(function () {
    j('#login-form').on('submit', function (e) {
        e.preventDefault();
        let el = j(this);
        let loader = j('.loading');
        let btn_submit = j('#submit');
        let csrf = el.data('csrf');
        let form_data = el.serialize();
        let action = 'do_register';
        console.log(form_data);
        j.ajax({
            url: 'user.php',
            type: 'POST',
            // dataType:JSON,
            data: form_data +"&action="+ action+"&csrf="+ csrf ,
            beforeSend: function () {
                loader.show();
                btn_submit.text('در حال ارسال');
            },
            success: function (response) {
                // alert('شما با موفقیت وارد شدید در حال انتقال');
                let jsonData = JSON.parse(response);
                if (jsonData.success == true) {
                    // alert(jsonData.message);
                    j.toast({
                        text: jsonData.message,
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
                } else {
                    j.toast({
                        text: jsonData.message,
                        icon: 'error',
                        showHideTransition: 'slide',
                        allowToastClose: false,
                        hideAfter: 3000,
                        stack: 5,
                        position: 'top-left',
                        textAlign: 'right',
                        loader: true,
                        loaderBg: '#344cf0',
                    })
                }
            },
            error: function (error) {
                console.log(error);
                // alert('خطایی در ورود شما به سایت صورت گرفته است');
            },
            complete: function () {
                loader.hide();
                btn_submit.text('ورود');
            },
        });
    });
});*/
j(document).ready(function () {
    j("#login-form").on('submit',function (e) {
        e.preventDefault();
        let username = j("#username").val();
        let password = j("#password").val();
        let csrf = j(this).data('csrf');
        j.ajax({
            URL:"login.php",
            TYPE:"POST",
            data:{
                action:"userLogin",
                username:username,
                password:password,
                csrf:csrf
            },
            beforeSend:function () {

            },
            success:function () {

            },
            error:function () {

            },
            complete:function () {

            }
        })
    })
})


















