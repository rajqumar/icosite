$(function(e){
	$.extend({
	    reAjax:function(url,request='')
	    {
			result = null
			$.ajax({
				type 	: "POST",
				url 	: url,
				data 	: request,
				dataType: "json",
				async	: false,
				success : function(data){
					result = data
				}
			});
			return result;
		},
	    redirectPost: function(location, args)
	    {
	        var rpfd = '';
	        $.each( args, function(k, v ) {
	            rpfd += '<input type="hidden" name="'+k+'" value="'+v+'">';
	        });
	        $('<form action="' + location + '" method="POST">' + rpfd + '</form>').appendTo($(document.body)).submit();
	    },   
	    redirectGet: function(location, args)
	    {
	        var rgfd = '';
	        $.each( args, function( k, v ) {
	            rgfd += '<input type="hidden" name="'+k+'" value="'+v+'">';
	        });
	        $('<form action="' + location + '" method="GET">' + rgfd + '</form>').appendTo($(document.body)).submit();
	    }
	});

	var set = {};
	signup = false;
	set.btn_spin_html = '<img src="/skin/lalalends/images/svg-icons/ring-alt.svg" width="25px">' ;

	$('form[name="borrower-signup-form"]').submit(function(e){
		e.preventDefault();

		if(ajaxRequestOn == true || signup==true)
			return false;
		$(this).removeClass('error-border');
		$(this).parent().find('.text-error').remove();

		if(checkValidation('borrower-signup-form')){

			ajaxRequestOn = true;


			$btn = $(this).find('button[type="submit"]');
	        var btn_text = $btn.html();
	        $btn.html(set.btn_spin_html);

			$.ajax({
				type:'POST',
				dataType:'json',
				data:$(this).serialize(),
				url:'/borrower/post_signup/',
				success:function(data){

					$btn.html(btn_text);
					ajaxRequestOn = false;

					//validation error
					if(data.status==201 || data.status==203){ 
						response = data.response;
						$.each(response, function(k,v){
							$('#'+k).addClass('error-border');
							if(v!=''){
								if($('#'+k).attr('data-error-text')){
									if($('#'+k).attr('data-show-parent')){
										$('#'+k).parent().parent().find('.text-error').remove();
										$('#'+k).parent().after('<div class="text-error text-left">'+v+'</div>');
									}
									else{
										$('#'+k).parent().find('.text-error').remove();
										$('#'+k).after('<div class="text-error text-left">'+v+'</div>');	
									}
								}
							}
						});
					}
					else
					if(data.status==200){
						
						signup = true;
                        $('#borrower-signup-form')[0].reset();
                        $('#borrower-signup-form').find('.response-message').removeClass('alert-danger');
                        $('#borrower-signup-form').find('.response-message').addClass('alert-success').css('width','100%').html('<div class="text-sucess"> '+data.message+'</div></div>');
						$(document).find('.alert-success').css('display','block');
                        setTimeout(function() {
                            $('#response-message').fadeOut('slow');
                            window.location=('/borrower/signin');
                        }, 10000);

					}	
				}
			});
		}
	});

	$('form[name="login-form"]').submit(function(e){
		e.preventDefault();

		if(ajaxRequestOn == true)
			return false;

		$(this).removeClass('error-border');
		$(this).parent().find('.text-error').remove();
		$(this).find('.error-box').css('display','none');
		

		if(checkValidation('login-form')){


			ajaxRequestOn = true;

			$btn = $(this).find('button[type="submit"]');
	        var btn_text = $btn.html();
	        $btn.html(set.btn_spin_html);

			$.ajax({
				type:'POST',
				dataType:'json',
				data:$(this).serialize(),
				url:'/secure/signin/',
				success:function(data){

					$btn.html(btn_text);
					ajaxRequestOn = false;

					//validation error
					if(data.status==201 || data.status==203){ 
						response = data.response;
						$('#login-form').find('.response-message').addClass('error-box').html('<div class="text-error"><strong>Error!</strong> '+response+'</div></div>');
						$(document).find('.error-box').css('display','block');
					}
					else
					if(data.status==200){
						window.location=data.redirect_url;
					}	
				}
			});
		}
	});
	
	var forgotStep = 1;
	$('form[name="forgot-form"]').submit(function(e){


		e.preventDefault();

		if(ajaxRequestOn == true)
			return false;

		if(forgotStep == 1){

			$(this).removeClass('error-border');
			$(this).parent().find('.text-error').remove();
			$(this).find('.error-box').css('display','none');


			var o = $(this).serializeArray().reduce(function(obj, item) {
	            obj[item.name] = item.value;
	            return obj;
	        }, {});

	       

			$btn = $(this).find('button[type="submit"]');
	        var btn_text = $btn.html();
	        $btn.html(set.btn_spin_html);

	        ajaxRequestOn = true;

	        $.post('/secure/forgotpassword',o, function(data) {

	        	ajaxRequestOn = false;

	        	$btn.html(btn_text);
	        	var obj = $.parseJSON(data);
	        	if(obj.status == 200){
	        		
	        		forgotStep = 2;
	        		$('form[name="forgot-form"] .forgotInputUsername').hide();
	        		$('form[name="forgot-form"] .forgotInputPassword, form[name="forgot-form"] .forgotInputOtp').fadeIn();
	        		$(document).find('.valification-notification').html('<span class="response-notification">'+obj.message+'</span>');
	        	}else{

	        		$('#forgot-form').find('.response-message').addClass('error-box').html('<div class="text-error"><strong>Error!</strong>'+obj.message+'</div></div>');
					$(document).find('.error-box').css('display','block');
	        		
	        		//$('#forgotPassForm-error-text').html(obj.msg);
	        	}
	        });

		}else{

			
			var o = $(this).serializeArray().reduce(function(obj, item) {
	            obj[item.name] = item.value;
	            return obj;
	        }, {});

	        console.log(o);

			$btn = $(this).find('button[type="submit"]');
	        var btn_text = $btn.html();
	        $btn.html(set.btn_spin_html);

	        ajaxRequestOn = true;

	        $.post('/secure/validateOTP',o, function(data) {

	        	ajaxRequestOn = false;

	        	$btn.html(btn_text);
	        	var obj = $.parseJSON(data);
	        	if(obj.status == 200){

	        		$('#forgotPassForm-error-text').html('');
	        		forgotStep = 1;
	        		$('form[name="forgot-form"]').trigger('reset');
	        		$('form[name="forgot-form"] .forgotInputUsername').show();
	        		$('form[name="forgot-form"] .forgotInputPassword, form[name="forgot-form"] .forgotInputOtp').hide();
	        		
	        		toggleforgotpass();
	        		$(document).find('.reset-confirmation-msg').css('display','block');

	        		$(document).find('.reset-confirmation-msg').html('<span class="response-notification">'+obj.message+'</span>');
	        		
	        	}else{

	        		$('#forgot-form').find('.response-message').addClass('error-box').html('<div class="text-error"><strong>Error!</strong> '+obj.message+'</div></div>');
					$(document).find('.error-box').css('display','block');
	        		//$('#forgotPassForm-error-text').html(obj.msg);
	        	}
	        });

		}
	});


	$(document).on('click','.error-box, .reset-confirmation-msg',function(){
		$(this).css('display','none');
	});
	 $('.forgotClass').click(function(){
        href = $(this).attr('data-id')
        //formId = href.substring(1, href.length);
        $(this).hide()
        $('#login-form').hide()
        $('#'+href).show()
   	})

   	$('.forgotPass').click(function(){
   		$('#forgot-form').hide()
   		$('.forgotClass').show()
   		$('#login-form').show()
   	}) 
   	$('.loginPage').click(function(){
   		window.location.href = "borrower/signin";   	
   	})
   /*	$('.nav-link').click(function(){
			href 	= $(this).attr('href');
			activNav = $(this).attr('data-nav');

			smoothScroll(href)	
		})

	$('#next').click(function(){
		href 	= $(this).attr('href')
		smoothScroll(href)
	})

	function smoothScroll(href){
		$('.nav-link[href="'+href+'"]').addClass('active')
		anchor 	= href.substring(1, href.length)
		id 		= $('.splash[data-anchor="'+anchor+'"]').attr('id')
		$('html, body').animate({
	        scrollTop: $("#"+id).offset().top
	    }, 1000);
	}*/
	$('.facebook_img').click(function(){
		response = $.reAjax('/secure/get_facebook_params');
		window.location.replace(response.login_url);
	})

	$('.linked_img').click(function(){
		response = $.reAjax('/secure/get_linkedIn_params');
		window.location.replace('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id='+response.client_id+'&redirect_uri='+response.redirect_uri+'&state='+response.csrf+'&scope='+response.scopes+'')
	})

	$('form[name="wallet-form"]').submit(function(e){
		e.preventDefault();
		if(ajaxRequestOn == true)
			return false;
		$(this).removeClass('error-border');
		$(this).parent().find('.text-error').remove();
		$(this).find('.error-box').css('display','none');
		if(checkValidation('wallet-form')){
			email = $('#email').val()
			response = $.reAjax('/secure/walletSub',{'email':email})
			if(response.status==201){
				$('#email').after('<div class="text-error text-left">'+response.response+'</div>')
			}else{
				$('#email').after('<div class="text-error text-left" style="color:green">'+response.response+'</div>')
			}
		}
	})
	$('form[name="careerForm"]').submit(function(e){
		e.preventDefault();

		if(ajaxRequestOn == true)
			return false;

		$(this).removeClass('error-border');
		$(this).parent().find('.text-error').remove();
		$(this).find('.error-box').css('display','none');
		

		if(checkValidation('careerForm')){
			formData = new FormData($(this)[0])
			$.ajax({
				type:'POST',
				dataType:'json',
				data:formData,
				url:'/secure/careers/',
				async: false,
	           	cache: false,
		        contentType: false,
		        processData: false,
				success:function(data){
					console.log(data)
					$btn.html(btn_text);
					ajaxRequestOn = false;

					//validation error
					if(data.status==201 || data.status==203){ 
						response = data.response;
						$('#login-form').find('.response-message').addClass('error-box').html('<div class="text-error"><strong>Error!</strong> '+response+'</div></div>');
						$(document).find('.error-box').css('display','block');
					}
					else
					if(data.status==200){
						window.location=data.redirect_url;
					}	
				}
			})
			console.log(formData)
			formData = new FormData($(this)[0])
			console.log(formData);
		}
	});

    $('form[name="news-letter-form"]').submit(function(e){

        e.preventDefault();

        if(ajaxRequestOn == true)
            return false;

        if(checkValidation('news-letter-form')){


            var o = $(this).serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
            }, {});
            $('.icona').html('<i class="icon-line-loader icon-spin"></i>');
			/*<i class="icon-email2"></i>*/
            ajaxRequestOn = true;
            $btn = $(this).find('button[type="submit"]');

            inputObj = $(this).find('input');

            var btn_text = $btn.html();
            $btn.html('<i class="icon-line-loader icon-spin"></i>');

            $.post('/secure/subscribe_news', o, function(data) {

                $('.icona').html('<i class="icon-email2"></i>');
                $btn.html(btn_text);
                var obj = $.parseJSON(data);
                ajaxRequestOn = false;
                if(obj.error==1)
                    $(inputObj).parent().after('<div class="text-error text-left">'+obj.msg+'</div>');
                else
                    $(inputObj).parent().after('<div class="text-success text-left">'+obj.msg+'</div>');

            });
        }
        else{
            $('.icona').html('<i class="icon-email2"></i>');
        }
    });
});