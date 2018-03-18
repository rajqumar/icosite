<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>ICO</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <script
        src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous"></script>
    <!-- Styles -->
    <style>
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: 'Roboto', sans-serif;
            font-weight: 100;
            height: 100vh;
            margin: 0;
        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
        }

        .title {
            font-size: 48px;
            margin: 0;
        }

        .m-b-md{
            width: 60px;
        }

    </style>
</head>
<body>
<div class="flex-center position-ref full-height">


    <div class="content">
        <div>
            <h3 class="title">SORRY </h3>
        </div>
        <div class="links">
            <p>The link  you trying to open has been expire.</p>
            <p>You will be automatically directed to our home page in a while.</p>
        </div>

    </div>
</div>
<script>
    $(document).ready(function () {
        window.setTimeout(function () {
            window.location = '/';
        }, 7000);
    })
</script>
</body>
</html>
