
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>ICO | Login</title>

    <link href="{{ asset('public/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('public/font-awesome/css/font-awesome.css') }}" rel="stylesheet">

    <link href="{{ asset('public/css/animate.css') }}" rel="stylesheet">
    <link href="{{ asset('public/css/style.css') }}" rel="stylesheet">

</head>

<body class="gray-bg">

    <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div>

                <h1 class="logo-name"></h1>

            </div>
            <h3>Welcome to login</h3>
            <p>Perfectly designed and precisely prepared.</p>
            <p>Login in. To see it in action.</p>
            <form class="m-t" role="form" method="POST" action="{{ route('login') }}">
                  {{ csrf_field() }}
                  <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" placeholder="Email" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                <input id="password" type="password" class="form-control" name="password" placeholder="Password" required>

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>

                        <div class="form-group">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                                    </label>
                            </div>
                        </div>

                        <div class="form-group">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>
                        
                                <a class="btn btn-link" href="{{ url('/pass_reset') }}">
                                    Forgot Your Password?
                                </a>
                        </div>

                    
<div style="padding-bottom: 20px;"></div>
     <div class="form-group">
                                <p>To register click here</p>
                                <a class="btn btn-link btn-lg" href="{{ route('register') }}">
                                <span class="label label-primary">Register</span>
                                </a>
                        </div>


            </form>
<!--             <p class="m-t"> <small>ICO app framework based on Bootstrap 3 &copy; 2018</small> </p>
 -->        </div>
    </div>

    <!-- Mainly scripts -->
    <script src="{{ asset('public/js/jquery-3.1.1.min.js') }}"></script>
    <script src="{{ asset('public/js/bootstrap.min.js') }}"></script>

</body>

</html>
