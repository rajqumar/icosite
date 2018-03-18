$(function(){

	$.extend({
        reAjax:function(url,request='')
        {
            result = null
            $.ajax({
                type    : "POST",
                url     : url,
                data    : request,
                dataType: "json",
                async   : false,
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
    })

	get_crypto = $.reAjax("/ajax/get_crypto_detail")
	userDetail = $.reAjax("/ajax/wallet_user_detail")

	if(get_crypto.status == 'success'){

		crypto_address = get_crypto.data.record
	}

	if(userDetail.status == 'success'){
		user = userDetail.data.record
		$('.user-name').html(user.first_name+' '+user.last_name)
	}

	getTrans   = $.reAjax("/ajax/get_transactions",user.wallet_address)

	if(getTrans.status == 'success'){
		network = getTrans.data.network
		txns = getTrans.data.txs
	}

    if(typeof getDashboardData != 'undefined'){
    
    	if(typeof user != 'undefined'){
    		d = ''
    		$.each(user.wallet_address, function(k,v){

    			btc_balance = $.reAjax("/ajax/get_btc_address_balance",{'address':v})

	    		d += '<li class="af-item flex-align-start">'
					d += '<div class="col-sm-2 af-info flex-center width-100 width-100-mobile border-bottom">'
						d += '<div class="af-marker"><i class="fa fa-btc"></i></div>'
				     d += '</div>'
				     d += '<div class="manage-dv">'
						d += '<div class="col-sm-4 mgt ml1">'+crypto_address[k].abbreviation+'</div>'
						d += '<div class="col-sm-3 mgt ml2">'+btc_balance.data.available_balance+'</div>'
						d += '<div class="col-sm-1 mgt ml3"><a href="#" class="wallet" data-crypto="BTC" data-trans="Deposit" data-address="'+v+'">Deposit</a></div>'
						d += '<div class="col-sm-1 mgt ml4"><a href="#" class="wallet" data-crypto="BTC" data-trans="Withdraw" data-address="'+v+'" data-balance="'+btc_balance.data.available_balance+'">Withdraw</a></div>'
					d += '</div>'
				d+= '</li>'

    		})

    		$('.balance').html(d)


    	}

    	if(typeof txns != 'undefined'){
    		t = ''
    		i = 0;
    		
    		$.each(txns, function(k,v){

    			if(i < 10){

    				t += '<li class="af-item flex-align-start">'
	    				t += '<div class="col-sm-2 af-info flex-center width-100 width-100-mobile border-bottom">'
	    					t += '<div class="af-marker"><i class="fa fa-file-text"></i></div>'
	    				t += '</div>'
	    				t += '<div class="manage-dv">'

	    					if(typeof v.recipient != 'undefined'){
	    						color = '#F26C57'
	    						type  = 'Sent'
	    						amt   = v.amt_sent
	    					}else{
	    						color = '#00BABC'
	    						type  = 'Recieved'
	    						amt   = v.amt_recieved
	    					}

	    					if(network == 'BTCTEST')
								coin  = 'BTC'

	    					t += '<div class="col-sm-4 mgt ml1" style="color: '+color+';">'+type+' '+coin+'</div>'

	    					t += '<div class="col-sm-3 mgt ml2">'+amt+'</div>'
	    					t += '<div class="col-sm-3 mgt ml3">'+v.date+'</div>'
	    					t += '<div class="col-sm-3 mgt ml4"><a href="https://chain.so/tx/'+network+'/'+v.txid+'" target="_blank">View</a></div>'

	    				t += '</div>'
	    			t += '</li>'

	    			i++ 
    			}

    		})

    		$('.txns').html(t)
		}
 
    }

    $('.wallet').click(function(){
		crypto_coin = $(this).data('crypto')
    	trans  = $(this).data('trans')
    	address= $(this).data('address')

    	if(trans == 'Deposit'){
			$.ajax({
				type:'post',
	            url:'/ajax/get_modal_form/deposit', 
	            success:function(response){
	            	new Clipboard('.copy-btn');
	            	$('.modal-form').html(response)
	            	$('#address').val(address)
	            	$('.qr-code').html('<img src="https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl='+address+'">')
	            },
	        })
    	}

    	if(trans == 'Withdraw'){

    		balance = $(this).data('balance')
    		$.ajax({
				type:'post',
	            url:'/ajax/get_modal_form/withdraw', 
	            success:function(response){
	            	$('#balance').val(balance)
	            	$('.modal-form').html(response)

	            	$('#withdraw-form').validate({
				        rules: {
				            address: {
				                required: true,
				                rangelength: [26, 35]
				            },
				            amount: {
				            	required: true,
				            	number: true,
				            	max: balance
				            }
				        },
				        messages: {
				        	address : {
				        		rangelength: 'Please Enter Valid Wallet Address',
				        		required : 'Please Enter Valid Wallet Address'
				        	},
				        	amount: {
				            	required : 'Please Enter Valid BTC Amount',
				            	max : 'Balance is insufficient',
				            	number : 'Only numeric value is accepted'
				            }
				        },
				    
				    });

	            	$('#withdraw-form').submit(function(e){

	            		event.preventDefault()

	            		data = $(this).serialize()

	            		nwCharge = $.reAjax('/ajax/calculate_network_fees',data)

	            		d = nwCharge.data

	            		$('.confirm-btn').css('display','block')

	            		if(nwCharge.status == 'success'){

	            			fees 	= d.estimated_network_fee

	            			bal  = d.withdraw_balance

	            			to_add = d.to_address

	            			amt = d.amount

	            			$('.confirm-content').html('<p>Transaction Charge : '+fees+'</p><p>Withddrawl Balance : '+bal+'</p><input type="hidden" id="to_address" value="'+to_add+'"><input id="amount" type="hidden" value="'+amt+'">')

	            		}else{

	            			$('.confirm-content').html(d.error_message)

	            			$('.confirm-btn').attr('data-dismiss','modal')

	            		}

	            		$('#transaction').modal('hide')

	            		$('#confirm-modal').modal('show')
	            	})

	            	$('.confirm-btn').click(function(){

	            		to_address 	= $('#to_address').val()

	            		amount  	= $('#amount').val()

	            		request 	= {'from_address':address, 'to_address':to_address, 'amount': amount}

	            		withdraw 	= $.reAjax('/ajax/withdraw_btc_balance',request)

	            		$('.confirm-btn').css('display','none')

	            		if(withdraw.status == "success"){

	            			$('.confirm-content').html('<p>Amount sent successfully</p><p>Transaction ID : '+withdraw.data.txid+'</p>')

	            			setTimeout(function(){
	            				window.location.reload();
							}, 2000);

	            		}else{

	            			$('.confirm-content').html(withdraw.data.error_message)

	            			setTimeout(function(){
							    $('#confirm-modal').modal('hide')
							}, 2000);
	            		}
	            	})

	            },
	        })
    	}

    	$('.modal-title').html(trans+' '+crypto_coin)
    	$('#transaction').modal('show')
	})
})