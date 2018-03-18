<?php
namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'eth_address' => 'required|string|min:42',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'eth_address' => $data['eth_address'],

        ]);
    }

     public function sendResetLinkEmail(Request $request)
    {
        $email = $request['email'];
         $token = str_random(60);
        $checkEmail = User::where(['email' => $email])->first();
        if ($checkEmail) {
            $firstName = $email;
            $data = [
                'name' => $firstName,
                        'token' => $token
            ];
            $update = User::where(['email' => $email])->update($data);
            if ($update) {
                    Mail::send(['html' => 'email_verify'], $data, function ($message) use ($email, $firstName) 
                    {
                       $message->to($email, $firstName)
                           ->subject('ICO : Reset Password');
                       $message->from('rajteewari57@gmail.com', 'ICO');
               });
               $response = array('status'=>'SUCC','message'=>'Reset password email has been sent');
            return json_encode($response);
            }else{
                 $response = array('status'=>'ERR','message'=>'Request Failed');
            return json_encode($response);
            }
        }else
        {
            $response = array('status'=>'ERR','message'=>'Email id does not exist in out database');
            return json_encode($response);
        }
    }

    public function resetUserPassword(Request $request)
    {
        if (isset($request['token'])) {
            $check = User::where('token', $request['token'])->first();
            if (!is_null($check)) {

                $userData = User::find($check->id);
                $token = str_random(30);
                if ($userData) {
                    $data = [
                        'password' => bcrypt($request['new_password']),
                        'token' => $token
                    ];
                    $update = User::where('id', '=', $check->id)
                        ->update($data);
                    if ($update) {
                         $response = array('status'=>'SUCC', 'message'=>'Password Updated Successfully.');
                         return json_encode($response);
                        die;
                    } else {
                        $response = array('status'=>'ERR', 'message'=>'Password be could not Updated Successfully.');
                        return json_encode($response);
                        die;
                    }
                } else {
                    $response = array('status'=>'ERR','message'=> 'User not found');
                    return json_encode($response);
                    die;
                }

            } else {
                $response = array('status'=>'ERR', 'message'=>'Invalid Access token given');
                return json_encode($response);
                die;
            }
        } else {
            return $this->_status('ERR', 'Something went wrong');
            return json_encode($response);
            die;
        }
    }

      public function reset_password_form($token)
    {
        $check = User::where('token', $token)->first();
        if (!is_null($check)) {
            return view('reset_password_form', ['token' => $token]);
        } else {
            return view('pages.verify_email_404');
        }
    }
}
