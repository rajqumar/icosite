<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Models\{Features, About, Background, Footer, Goals, Header, Roadmap, Solutions, Subscriber, Team, Tokensale, Tokenstructure, Clients, Customize};

class Controller extends BaseController{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function home(){

    	$arr = array(
    		'clients' => Clients::all(),
	    	'features' => Features::all(),
	    	'about' 	  => About::all(),
	    	'background' => Background::all(),
	    	'footer' => Footer::all(),
	    	'goals' => Goals::all(),
	    	'header' => Header::all(),
	    	'roadmap' => Roadmap::all(),
	    	'solutions' => Solutions::all(),
	    	'subscriber' => Subscriber::all(),
	    	'team' => Team::all(),
	    	'tokensale' => Tokensale::all(),
	    	'tokenstructure' => Tokenstructure::all(),
	    	'customize' => Customize::all()
    	);

    	return view('welcome', $arr);
    }

}
