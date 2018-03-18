
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>ICO | Register</title>
    <link href="{{ asset('public/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('public/font-awesome/css/font-awesome.css') }}" rel="stylesheet">

    <link href="{{ asset('public/css/animate.css') }}" rel="stylesheet">
    <link href="{{ asset('public/css/style.css') }}" rel="stylesheet">

    <link href="{{ asset('public/css/plugins/iCheck/custom.css') }}" rel="stylesheet">

</head>

<body class="gray-bg">

    <div class="middle-box text-center loginscreen   animated fadeInDown">
        <div>
            <div>

                <h1 class="logo-name"></h1>

            </div>
            <h3>Register here</h3>
            <p>Create account to see it in action.</p>
            <form class="m-t" role="form" method="POST" action="{{ route('register') }}">
                                       {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" placeholder="Name" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">

                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" placeholder="Email" required>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="form-group{{ $errors->has('eth_address') ? ' has-error' : '' }}">

                                <input id="eth_address" type="text" class="form-control" name="eth_address" value="{{ old('eth_address') }}" placeholder="Ethereum Address" required>

                                @if ($errors->has('eth_address'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('eth_address') }}</strong>
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
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" placeholder="Confirm password" required>
                        </div>

                        <div class="form-group">
                                <button type="submit" class="btn btn-primary">
                                    Register
                                </button>
                        </div>
            </form>
<!--             <p class="m-t"> <small>ICO app framework based on Bootstrap 3 &copy; 2018</small> </p>
 -->        </div>
    </div>

    <!-- Mainly scripts -->
    <script src="{{ asset('public/js/jquery-3.1.1.min.js') }}"></script>
    <script src="{{ asset('public/js/bootstrap.min.js') }}"></script>
    <!-- iCheck -->
    <script src="{{ asset('public/js/plugins/iCheck/icheck.min.js')}}"></script>
    <script>
        $(document).ready(function(){
            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green',
            });
        });
    </script>
</body>

</html>
