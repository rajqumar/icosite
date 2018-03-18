$(function(){

      isAjax = false;



      $(document).on('click','#proceed-payment',function(){

            $(document).find('.text-error').remove();
            valid = true;
            num = /^[0-9]+$/;
            if($('#bal-amount').val()=="")
            {
                $('#bal-amount').parent().after('<span class="text-error">Please enter amount</span>');
                return false;
            }

            if(!num.test($('#bal-amount').val())){

              $('#bal-amount').parent().after('<span class="text-error">Please enter amount</span>');
              return false; 
            }

            if(eval($('#bal-amount').val()) > 25000)
            {
                $('#bal-amount').parent().after('<span class="text-error">Sorry! You can not add more than Rs. 25000 at a time.</span>');
                return false; 
            }

            if(eval($('#bal-amount').val()) < 100)
            {
                $('#bal-amount').parent().after('<span class="text-error">Sorry! Deposit amount should be more than Rs. 100.</span>');
                return false; 
            }

            $(document).find('.amount-section').click();
        });

        $(document).on('click','.text-error',function(){
            $(document).find('.text-error').remove();
        });

      $(document).on('click','.mode',function(){
        
        if($(this).attr('data-payment-mode')=='manual'){
          $(document).find('.payment-instructions').css('display',"block");
    		 	$(document).find('.payment-mode').css('display',"none");
          $(document).find('.pg-amount-form').css('display',"none ");
        }
        else
        if($(this).attr('data-payment-mode')=='pg'){
          $(document).find('.pg-amount-form').css('display',"block");
          $(document).find('.payment-instructions').css('display',"none");
          $(document).find('.payment-mode').css('display',"none");
        }
		
		  });

        $(document).on('click','input, textarea',function(){
        	$(document).find('.error-text').remove();
        });

        $(document).on('click','.back-to-payment-mode',function(){
          $(document).find('.pg-amount-form').css('display',"none ");
        	$(document).find('.payment-instructions').css('display',"none");
			  $(document).find('.payment-mode').css('display',"block");
        });

        
        $(document).on('click','.back-to-deposit-process',function(){
        	$(document).find('.payment-instructions').css('display',"block");
        	$(document).find('.payment-process-section').css('display',"none");
        });

        $(document).on('click','.agree-proceed',function(){
        	$(document).find('.payment-instructions').css('display',"none");
        	$(document).find('.payment-process-section').css('display',"block");
        });

        deposit_mode = '';
        bank="";
        reference_number="";
        amount = '';

        $(document).on('click','.bank-option',function(){
        	
        	$(document).find('.selected-bank-option').removeClass('selected-bank-option');
        	$(this).addClass('selected-bank-option');

        	bank = $(this).attr('data-bank-option-name');
        	
        });



        $(document).on('click','.mode-option',function(){
        	
        	$(document).find('.selected-mode-option').removeClass('selected-mode-option');
        	$(this).addClass('selected-mode-option');
        	deposit_mode = $(this).attr('data-bank-mode');
        	
        });

        $(document).on('click','#request-order',function(){
          valid = true;
          $(document).find('.error-text').remove();
          num = /^[0-9]+$/;
          msg = '';
          i = 0;

          if(!num.test($('#bal-amount').val())){

            msg+= '<li>Please enter amount.</li>';
            valid = false;
          }

          if(eval($('#bal-amount').val()) > 25000)
          {
              $('#bal-amount').parent().after('<span class="text-error">Sorry! You can not add more than Rs. 25000 at a time.</span>');
              return false; 
          }

          if(eval($('#bal-amount').val()) < 100)
          {
              $('#bal-amount').parent().after('<span class="text-error">Sorry! Deposit amount should be more than Rs. 100.</span>');
              return false; 
          }
          

  			  if($('#reference-number').val()==''){
            msg+= '<li>Please enter reference number.</li>';
    			  valid = false;
          }


    			if(deposit_mode=='')
    			{
            msg+= '<li>Please select deposit mode</li>';
    				valid=false;
    			}

    			if(bank=='')
    			{
    				
    				msg+= '<li>Please select bank</li>';
    				valid=false;
    			}

  			

    			if(valid==false)
    			{
    				showErrorNotification(msg);
    				return false;
    			}

    			reference_number = $('#reference-number').val();
    			amount = $('#bal-amount').val();

    			$.ajax({
  				type:"post",
    				dataType:'json',
    				url:CONF.baseurl+"/account/post_order_request",
    				data:{mode:deposit_mode, bank:bank, reference_number:reference_number, amount:amount},
    				success:function(response){
  					if(response.statuscode=='SUCC')
  					{
               	showSuccessNotification(response.message);
               	window.location = CONF.baseurl+'/account/deposit-request-history';
  					}
  					else{
                showErrorNotification(response.message);
  					}

    				},
    				complete:function(response){

    				}
    			});
		    });



        $(document).on('click','#pg-request-order',function(){


            if(isAjax==true)
              return false;
            
            valid = true;
            $(document).find('.error-text').remove();
            num = /^[0-9]+$/;
            msg = '';
            i = 0;

            if(!num.test($('#bal-amount').val())){

              msg+= '<li>Please enter amount.</li>';
              valid = false;
            }
            if(valid==false)
            {
              showErrorNotification(msg);
              return false;
            }

            
            amount = $('#bal-amount').val();

            $.ajax({
                type:"post",
                dataType:'json',
                url:CONF.baseurl+"/post_pg_mk_request",
                data:{amount:amount},
                success:function(response){

                if(response.statuscode=='SUCC')
                {
                    $(document).find('.pg-form-section').html(response.data.form);
                    $(document).find('#pay-now').click();
                }
                else{
                    showErrorNotification(response.message);
                }

                },
                complete:function(response){
                    isAjax=false;
                }
            });
        });


    });
