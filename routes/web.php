<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'Controller@home');

Route::post('/subscribe', 'SiteController@subscribe');
Route::post('/post_reset_password','Auth\RegisterController@sendResetLinkEmail');
Route::get('/reset_password_form/{token}','Auth\RegisterController@reset_password_form');
Route::post('/reset_password','Auth\RegisterController@resetUserPassword');
Auth::routes();

Route::get('/home', 'Controller@home')->name('home');

Route::get('/login', array('as' => 'login', function(){
    return View::make('login');
}));

Route::get('/logout', function(){
	Auth::logout();
    return redirect()->back();
});

Route::get('/ripple', function(){
	return view('pages.ripple');
});

Route::get('/pass_reset', function(){
	return view('reset_password');
});