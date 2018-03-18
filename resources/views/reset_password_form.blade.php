<title>ICO</title>
<head>
    <link href="{{ URL::asset('/public/skin/css/font-awesome/css/font-awesome.min.css')}}" rel="stylesheet">
    <link href="{{ URL::asset('/public/skin/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ URL::asset('/public/skin/css/plugins/toastr/toastr.min.css')}}" rel="stylesheet">
    <style>
        #login-page {
            background-color: #e7ebee;
        }
        label.error {
            padding: 1px 8px;
            background: #d9534f;
            border-radius: 4px;
            color: #fff !important;
            font-weight: 700;
            cursor: pointer;
            color: #cc5965;
            display: inline-block;
            margin-left: 5px;
            float: left;
            font-size: 11px;
            font-weight: 400;
            margin-top: 5px;
        }

        label.error:before {
            content: "";
            position: absolute;
            left: 11px;
            top: 45px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 10px 10px;
            border-color: transparent transparent #d9534f;
            z-index: 9999;
        }
        #login-box {
            max-width: 350px;
            min-width: 280px;
            margin: 60px auto 20px;
            overflow: hidden;
            border-radius: 3px 3px 0 0;
            background-clip: padding-box;
        }

        @media only screen and (max-width: 767px) {
            #login-box {
                margin-top: 20px;
            }
        }

        #login-box #login-box-header {
            height: 5px;
        }

        #login-box #login-box-header > div {
            height: 100%;
            width: 16.6667%;
            float: left;
        }

        #login-box #login-box-header .login-box-header-red {
            background: #e74c3c;
        }

        #login-box #login-box-header .login-box-header-green {
            background: #2ecc71;
        }

        #login-box #login-box-header .login-box-header-yellow {
            background: #f1c40f;
        }

        #login-box #login-box-header .login-box-header-purple {
            background: #9b59b6;
        }

        #login-box #login-box-header .login-box-header-blue {
            background: #3498db;
        }

        #login-box #login-box-header .login-box-header-gray {
            background: #95a5a6;
        }

        #login-box-inner {
            background: #fff;
            border-radius: 0 0 3px 3px;
            background-clip: padding-box;
            border: 1px solid #e1e1e1;
            border-bottom-width: 5px;
            padding: 40px 25px;
        }

        #login-box-inner.with-heading {
            padding-top: 20px;
        }

        #login-box-inner h4 {
            margin-top: 0;
            margin-bottom: 10px;
        }

        #login-box-inner .reset-pass-input {
            padding: 10px 0;
            margin-bottom: 0;
        }

        #login-logo {
            background: none repeat scroll 0 0 #c0c8d0;
            color: #fff;
            display: block;
            font-size: 2em;
            font-weight: 400;
            padding: 35px 0;
            text-align: center;
            text-transform: uppercase;
        }

        #login-logo > img {
            display: block;
            height: 40px;
            margin: 0 auto;
        }

        #login-logo > span {
            display: block;
            font-size: 0.6em;
            font-weight: 300;
            text-transform: none;
        }

        #login-box .input-group {
            width: 100%;
        }

        #login-box .input-group input {
            font-weight: 300;
        }

        #login-box .input-group .input-group-addon {
            padding-left: 0;
            padding-right: 0;
            min-width: 50px;
        }

        #login-box .input-group .input-group-addon i {
            color: #efefef;
        }

        #login-box #login-forget-link {
            display: block;
            font-size: 0.875em;
            text-align: right;
            margin-top: 3px;
        }

        #login-box #remember-me-wrapper {
            padding: 10px 0;
        }

        #login-box .btn {
            font-size: 1.125em;
            font-weight: 600;
            padding-bottom: 10px;
            padding-top: 10px;
            text-transform: uppercase;
            margin-top: 8px;
        }

        #login-box .form-group {
            margin-bottom: 7px;
        }

        #login-box .form-group .checkbox label {
            padding-left: 7px;
        }

        #login-box .form-group .checkbox input {
            margin-left: 0;
        }

        #login-box .btn-facebook, #login-box .btn-twitter {
            text-transform: none;
            font-size: 1em;
            margin-bottom: 10px;
        }

        #login-box .social-text {
            margin: 0;
            padding: 15px 0;
            text-align: center;
            font-size: 0.875em;
        }

        #login-box-inner .input-group > .form-control, #login-box-inner .input-group > .input-group-addon {
            height: 46px;
            padding-top: 0;
            padding-bottom: 0;
        }

        #login-box-inner .input-group > .input-group-addon {
            height: 44px;
        }

        #login-box-footer {
            text-align: center;
            font-size: 0.875em;
            margin-top: 10px;
        }
        label {
            color: red;
            font-size: 12px;
            font-weight: 300;
            padding-left: 10px;
            padding-top: 3px;
        }
        #login-full-wrapper #login-box-footer {
            color: #fff;
        }

        #login-full-wrapper #login-box-footer a {
            color: #fff;
            text-decoration: underline;
        }

        #login-full-wrapper #login-box-footer a:hover {
            text-decoration: none;
        }

        #login-page .login-create, #login-page-full .login-create {
            margin-bottom: 20px;
        }

        @media (max-height: 605px) {
            #login-full-wrapper {
                position: relative;
            }
        }

        @media (max-height: 621px) and (max-width: 767px) {
            #login-full-wrapper {
                position: relative;
            }
        }

        #login-full-wrapper #login-box {
            border: none;
        }

        #login-page-full .container {
            max-width: 1440px;
            margin: 0 auto;
        }

        #login-page-full .login-full-create {
            margin-right: 20px;
            line-height: 50px;
        }

        #login-full-left {
            margin-top: 50px;
            margin-bottom: 20px;
        }

        #login-full-left h1 {
            text-align: center;
            color: #363636;
            font-weight: 600;
            margin-bottom: 40px;
        }

        #login-full-left h2 {
            text-align: center;
            margin-top: 30px;
        }

        #login-full-left p.login-full-devices {
            margin-top: 30px;
        }

        #login-full-left .login-full-features {
            margin: 20px 0;
            padding: 0;
            list-style: none;
            text-align: center;
        }

        #login-full-left .login-full-features > li {
            display: inline-block;
            margin: 0 8px;
        }

        #login-full-left .login-full-features > li > i {
            display: block;
            text-align: center;
            font-size: 1.6em;
            margin-bottom: 4px;
        }

        #login-full-left .login-full-features > li > span {
            display: block;
            text-align: center;
            font-size: 0.845em;
            line-height: 1.2;
        }

        span.input-group-addon {
            height: 38px !important;
        }

        input.form-control {
            height: 38px !important;
        }

        button.btn.btn-success.col-xs-12 {
            background: #1ab394;
            border-color: #1ab394;
        }

        @media (max-height: 605px) {
            #login-full-wrapper.reset-password-wrapper {
                position: absolute;
            }
        }

        @media (max-height: 505px) {
            #login-full-wrapper.reset-password-wrapper {
                position: relative;
            }
        }
    </style>
    <meta name="csrf-token" content="{{csrf_token()}}"/>
</head>
<body id="login-page" class="theme-whbl" style="">
<div class="container">
    <div class="row">
        <div class="col-xs-12">
            <div id="login-box">
                <div id="login-box-holder">
                    <div class="row">
                        <div class="col-xs-12">
                            <header id="login-header">
                                <div id="login-logo">
                                    ICO
                                </div>
                            </header>
                            <div id="login-box-inner" class="with-heading">
                                <h4 align="center">Reset Your Password</h4>
                                <form action="" method="post" name="reset_password" id="reset_password">
                                    <div class="input-group reset-pass-input">
                                        <input class="form-control" type="password" name="new_password"
                                               id="new_password" placeholder="New Password">
                                    </div>
                                    <div class="input-group reset-pass-input">
                                        <input class="form-control" type="password" name="conf_password"
                                               id="conf_password" placeholder="Confirm New Password">
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <button type="submit" class="btn btn-success col-xs-12" id="reset_pass"
                                                    name="reset_pass">Reset password
                                            </button>
                                        </div>
                                        <div class="col-xs-12">
                                            <br>
                                            <a href="/login" id="login-forget-link" class="forgot-link col-xs-12">Back
                                                to login</a>
                                        </div>
                                    </div>
                                    <input type="hidden" name="token" id="token" value="{{$token}}">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="{{ URL::asset('/public/skin/js/jquery-3.1.1.min.js')}}"></script>
<script type="text/javascript" src="{{URL::asset('/public/skin/js/plugins/toastr/toastr.min.js')}}"></script>
<script src="{{ URL::asset('/public/skin/js/bootstrap.min.js')}}"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
<script>
    var TOOLS = {};
    TOOLS.Loader = '<i class="fa fa-cog fa-spin" aria-hidden="true"></i>'
    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }

    });
    $(document).ready(function () {

        $("#reset_password").validate({
            rules: {

                new_password: {
                    required: true,
                    minlength: 6
                },
                conf_password: {
                    required: true,
                    minlength: 6,
                    equalTo: "#new_password"
                }

            },
            messages: {

                new_password: {
                    required: "Please enter a new password address",
                    minlength: "Password must be atleast 6 characters"
                },
                conf_password: {
                    required: "Please enter a password",
                    minlength: "Password must be atleast 6 characters",
                    equalTo: "Enter the same value as new password"
                }
            }
        });
    });

    $("#reset_pass").click(function () {
        var _this = $(this);
        TOOLS.dt = _this.html();
        if ($("#reset_password").valid()) {
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: '/reset_password',
                data: $("#reset_password").serialize(),
                beforeSend: function () {
                    _this.html(TOOLS.Loader).attr('disabled', true);
                },
                success: function (response) {
                    _this.html(TOOLS.dt).removeAttr('disabled');

                    if (response.status == 'SUCC') {
                        alert(response.message);
                        window.setTimeout(function () {
                            window.location = '/login';
                        }, 2000);
                    }
                    else {
                        alert(response.message);
                    }
                },
                complete:function() {
                   _this.html(TOOLS.dt).removeAttr('disabled');
                }

            });
        }
    });
</script>
</body>