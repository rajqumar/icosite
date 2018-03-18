<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscriber;

class SiteController extends Controller{

    public function subscribe(Request $req){
	    $res = Subscriber::create(['email_address' => $req->email_address]);
	    if($res){
	        print_r('Success');
	    }else{
	        print_r('Failed');
	    }
    }

}
