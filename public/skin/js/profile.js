$(document).ready(function () {

    $('#dob').datepicker({
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true,
        format: "dd/mm/yyyy"
    });

    $.get("http://ipinfo.io", function (response) {
        countryName = response.country;
        $("#country_code").intlTelInput({
            preferredCountries: [countryName.toLowerCase()],
        });
    }, "json");

    $.ajax({
        type: 'post',
        dataType: 'json',
        url: CONF.baseurl + '/get_pincodes',
        success: function (response) {
            if (response.statuscode == 'SUCC') {
                var selected = '';
                var options = '<option>Select a Pincode</option>';
                $.each(response.data, function (key, val) {
                    var pincodes = $("#userPin").val();
                    if (val.pincode == pincodes) {
                        selected = 'selected';
                    } else {
                        selected = '';
                    }
                    options += '<option ' + selected + ' value=' + val.pincode + '>' + val.pincode + '</option>';
                });
                $("#pincode").html(options);
            }
            else {
                console.log(response);
            }
        }
    });

    $("#pincode").on('change', function () {
        var pincode = $("#pincode").val();
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: CONF.baseurl + '/get_state',
            data: {'pincode': pincode},
            success: function (response) {
                if (response.statuscode == 'SUCC') {
                    $("#city").val(response.data.town);
                    $("#state").val(response.data.state);
                }
                else {
                    console.log(response);
                }
            }
        });
    });

    $("#user-password-form").validate({
        rules: {
            password: {
                required: true,
                minlength: 6
            },
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
        message: {
            mobile: {
                required: 'Please enter current password',
                minlength: 'password must be at least 6 characters'
            },

            new_password: {
                required: "Please enter a new password",
                minlength: 'new password must be at least 6 characters'
            },
            conf_password: {
                required: "Please enter a new password",
                minlength: 'new password must be at least 6 characters',
                equalTo: 'Password did not match'
            }
        }
    });

    $("#personal-profile-info-form").validate({
        rules: {
            first_name: {
                required: true
            },
            last_name: {
                required: true
            },
            gender: {
                required: true
            },
            dob: {
                required: true
            },
            address: {
                required: true
            },
            pincode: {
                required: true
            },
            city: {
                required: true
            },
            state: {
                required: true
            },
            country: {
                required: true
            }

        },
        messages: {
            first_name: 'Please enter first name',
            last_name: 'Please enter last name',
            gender: 'Please select a gender',
            dob: 'Please enter a dob',
            address: 'Please enter a address',
            pincode: 'Please select a pincode',
            city: 'Please enter a city',
            state: 'Please enter a state',
            country: 'Please enter a country'

        }
    });

    $("#user-docs-form").validate({
        rules: {
            id_proof: {
                required: true
            },
            address_proof: {
                required: true
            },
            id_proof_doc: {
                required: true
            },
            address_proof_doc: {
                required: true
            }

        },
        messages: {
            id_proof: 'Please select an id card',
            address_proof: 'Please select an address proof',
            id_proof_doc: 'Please upload a file',
            address_proof_doc: 'Please upload a file'
        }
    });

    $('#change_pass').click(function () {
        var _this = $(this);
        TOOLS.dt = $(this).html();
        if ($("#user-password-form").valid()) {
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: CONF.baseurl + '/update_password',
                data: $("#user-password-form").serialize(),
                beforeSend: function () {
                    _this.html(TOOLS.Loader).attr('disabled', true);
                },
                success: function (response) {

                    _this.html(TOOLS.dt).removeAttr('disabled');

                    if (response.statuscode == 'SUCC') {

                        showSuccessNotification(response.message);
                        window.setTimeout(function () {
                            location.reload()
                        }, 3000);
                    }
                    else {
                        showErrorNotification(response.message);
                    }

                }

            });
        }
    });

    $('#upd_submit ').click(function () {
        var _this = $(this);
        TOOLS.dt = $(this).html();
        if ($("#personal-profile-info-form").valid()) {
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: CONF.baseurl + '/updateProfile',
                data: $("#personal-profile-info-form").serialize(),

                beforeSend: function () {
                    _this.html(TOOLS.Loader).attr('disabled', true);
                },
                success: function (response) {
                    _this.html(TOOLS.dt).removeAttr('disabled');
                    if (response.statuscode == 'SUCC') {

                        showSuccessNotification(response.message);
                        window.setTimeout(function () {
                            location.reload()
                        }, 3000);
                    }
                    else {
                        showErrorNotification(response.message);
                    }
                }

            });
        }
    });

    $(document).on('change', '#image', function () {
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png)$/;
        if (regex.test($(this).val().toLowerCase())) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('profileImageShow').src = e.target.result;
                $("#imageUpload").removeAttr('disabled');
            };
            reader.readAsDataURL(this.files[0]);
        }else
        {
            showErrorNotification('Invalid file type')
        }
    });

    $(document).on('click', '#imageUpload', function () {
        var _this = $("#imageUpload");
        TOOLS.dt = _this.html();
        var formData = new FormData();
        formData.append('file', $('#image')[0].files[0]);
        $.ajax({
            type: 'post',
            url: CONF.baseurl + '/uploadProfileImage',
            data: formData,
            beforeSend: function () {
                _this.html(TOOLS.Loader).attr('disabled', true);
            },
            contentType: false,
            processData: false,
            success: function (response) {
                _this.html(TOOLS.dt);
                if (response.statuscode == 'SUCC') {

                    showSuccessNotification(response.message);
                }
                else {
                    showErrorNotification(response.message);
                }
            },
            complete: function () {
                _this.html(TOOLS.dt);
            }
        });
    });

    $(document).on('submit', 'form[name="user-docs-form"]', function (e) {
        e.preventDefault();
        var _this = $("#upload_doc");
        TOOLS.dt = $(this).html();
        var formData = new FormData($(this)[0]);
        $.ajax({
            dataType: 'json',
            type: 'post',
            url: CONF.baseurl + '/uploadDocuments',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function () {
                _this.html(TOOLS.Loader).attr('disabled', true);
            },
            success: function (response) {
                _this.html(TOOLS.dt).removeAttr('disabled');
                if (response.statuscode == 'SUCC') {
                    showSuccessNotification(response.message);
                    window.setTimeout(function () {
                        location.reload()
                    }, 3000);
                }
                else {
                    showErrorNotification(response.message);
                }
            }
        });
    });

    $("#country_codes").change(function () {

        var data = $("#country_codes").val();
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: CONF.baseurl + '/getKycDocList',
            data: {'data': data},

            success: function (response) {
                if (response.statuscode == 'SUCC') {

                    var lists = response.data;
                    var options = '<option value="">Select a value</option>';
                    $.each(lists, function (id, name) {
                        options += '<option value=" ' + name.id + '">' + name.name + '</option>'

                    });

                    $("#id_proof").html(options);
                    $("#address_proof").html(options);
                    $("#other").html(options);
//                        showSuccessNotification(response.message);

                }
                else {
                    showErrorNotification(response.message);
                }

            }

        });
    });

    $("#id_proof").change(function () {
        var name = $("#id_proof").val();
        $("#id_proof_doc").attr('name', name);

    });

    $("#address_proof").change(function () {
        var name = $("#address_proof").val();
        $("#address_proof_doc").attr('name', name);

    });

    $("#other").change(function () {
        var name = $("#other").val();
        $("#other_doc").attr('name', name);

    });

    $(document).on('click', '#updMobile', function () {
        var _this = $("#updMobile");
        TOOLS.dt = _this.html();
        var mobile = $("#userMobileNumber").val();
        var country_code = $("#country_code").val();
        var id = $("#id").val();
        if (mobile) {
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: CONF.baseurl + '/mobile_update',
                data: {'mobile': mobile, 'id': id, 'country_code': country_code},
                beforeSend: function () {
                    _this.html(TOOLS.Loader).attr('disabled', true);
                },
                success: function (response) {

                    _this.html(TOOLS.dt).removeAttr('disabled');

                    if (response.statuscode == 'SUCC') {

                        showSuccessNotification(response.message);
                        window.setTimeout(function () {
                            location.reload()
                        }, 3000);
                    }
                    else {
                        showErrorNotification(response.message);
                    }

                }

            });

        } else {
            $("#errMobile").html('please enter your mobile');
        }

    });

    function isNumber(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    $(document).on('click', '#enbAuth', function () {
        var _this = $("#enbAuth");
        TOOLS.dt = _this.html();
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: CONF.baseurl + '/enable_auth',
            beforeSend: function () {
                _this.html(TOOLS.Loader).attr('disabled', true);
            },
            success: function (response) {

                _this.html(TOOLS.dt).removeAttr('disabled');

                if (response.statuscode == 'SUCC') {

                    showSuccessNotification(response.message);
                    window.setTimeout(function () {
                        location.reload()
                    }, 3000);
                }
                else {
                    showErrorNotification(response.message);
                }

            }

        });
    });

    $(document).on('click', '#otpButton', function () {
        var _this = $("#otpButton");
        TOOLS.dt = _this.html();
        var otp = $("#mobileOtp").val();
        var id = $("#id").val();
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: CONF.baseurl + '/verify_mobile',
            data: {'otp': otp, 'id': id},
            beforeSend: function () {
                _this.html(TOOLS.Loader).attr('disabled', true);
            },
            success: function (response) {

                _this.html(TOOLS.dt).removeAttr('disabled');

                if (response.statuscode == 'SUCC') {
                    showSuccessNotification(response.message);
                    window.setTimeout(function () {
                        location.reload()
                    }, 3000);
                }
                else {
                    showErrorNotification(response.message);
                }

            }

        });
    });

    $(document).on('click', '#verify_mobile', function () {
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: CONF.baseurl + '/resendOtp',
            beforeSend: function () {
                $("#mobile_link").html('<i class="fa fa-cog" aria-hidden="true"></i>');
            },
            success: function (response) {

                if (response.statuscode == 'SUCC') {
                    $("#mobile_link").html('');
                    $("#mobile_verify").html("<input onkeypress='return isNumber(event)' type='text' name='mobileOtp' id='mobileOtp' value=''><span style='margin-left: 10px;'>" +
                        "<button name='otpButton' id='otpButton' class='btn-primary'>Verify " +
                        "</button></span><br><span class='alert-danger' id='errOtp'></span>")
                    showSuccessNotification(response.message);

                }
                else {
                    showErrorNotification(response.message);
                }

            }

        });
    });

    $(document).on('click', '#verify_email', function () {
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: CONF.baseurl + '/emailVerification',
            beforeSend: function () {
                $("#email_link").html('<i class="fa fa-cog" aria-hidden="true"></i>');
            },
            success: function (response) {

                if (response.statuscode == 'SUCC') {

                    showSuccessNotification(response.message);
                    $("#email_link").html('(link sent)');
                }
                else {
                    showErrorNotification(response.message);
                }
            }

        });

    });

    $(document).on('change', '#idProof', function () {
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png)$/;
        if (regex.test($(this).val().toLowerCase())) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('idProofImage').src = e.target.result;
                $('#idProofUpload').removeAttr('disabled');
            };
            reader.readAsDataURL(this.files[0]);
        } else {
            document.getElementById('idProofImage').src = CONF.baseurl + '/public/skin/images/pdf-icon.png';
            $('#idProofUpload').removeAttr('disabled');
        }
    });

    $(document).on('change', '#addressProof', function () {
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png)$/;
        if (regex.test($(this).val().toLowerCase())) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('addressProofImage').src = e.target.result;
                $('#addressProofUpload').removeAttr('disabled');
            };
            reader.readAsDataURL(this.files[0]);
        } else {
            document.getElementById('addressProofImage').src = CONF.baseurl + '/public/skin/images/pdf-icon.png';
            $('#addressProofUpload').removeAttr('disabled');
        }
    });

    $(document).on('change', '#passport', function () {
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png)$/;
        if (regex.test($(this).val().toLowerCase())) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('passportImage').src = e.target.result;
                $('#passportUpload').removeAttr('disabled');
            };
            reader.readAsDataURL(this.files[0]);
        } else {
            document.getElementById('passportImage').src = CONF.baseurl + '/public/skin/images/pdf-icon.png';
            $('#passportUpload').removeAttr('disabled');
        }
    });

    $(document).on('click', '#idProofUpload', function () {
        var _this = $("#idProofUpload");
        TOOLS.dt = _this.html();
        var data = new FormData();
        data.append('file', $('#idProof')[0].files[0]);
        data.append('doc_id', '1');
        $.ajax({
            type: 'post',
            url: CONF.baseurl + '/kyc_doc_upload',
            data: data,
            beforeSend: function () {
                _this.html(TOOLS.Loader).attr('disabled', true);
            },
            contentType: false,
            processData: false,
            success: function (response) {
                _this.html(TOOLS.dt).removeAttr('disabled');
                if (response.statuscode == 'SUCC') {
                    showSuccessNotification(response.message);
                } else {
                    showErrorNotification(response.message);
                }
            },
            complete: function () {
                _this.html(TOOLS.dt).removeAttr('disabled');
            }
        });
    });

    $(document).on('click', '#addressProofUpload', function () {
        var _this = $("#addressProofUpload");
        TOOLS.dt = _this.html();
        var data = new FormData();
        data.append('file', $('#addressProof')[0].files[0]);
        data.append('doc_id', '2');
        $.ajax({
            type: 'post',
            url: CONF.baseurl + '/kyc_doc_upload',
            data: data,
            beforeSend: function () {
                _this.html(TOOLS.Loader).attr('disabled', true);
            },
            contentType: false,
            processData: false,
            success: function (response) {
                _this.html(TOOLS.dt).removeAttr('disabled');
                if (response.statuscode == 'SUCC') {
                    showSuccessNotification(response.message);
                } else {
                    showErrorNotification(response.message);
                }
            },
            complete: function () {
                _this.html(TOOLS.dt).removeAttr('disabled');
            }
        });
    });

    $(document).on('click', '#passportUpload', function () {
        var _this = $("#passportUpload");
        TOOLS.dt = _this.html();
        var data = new FormData();
        data.append('file', $('#passport')[0].files[0]);
        data.append('doc_id', '3');
        $.ajax({
            type: 'post',
            url: CONF.baseurl + '/kyc_doc_upload',
            data: data,
            beforeSend: function () {
                _this.html(TOOLS.Loader).attr('disabled', true);
            },
            contentType: false,
            processData: false,
            success: function (response) {
                _this.html(TOOLS.dt).removeAttr('disabled');
                if (response.statuscode == 'SUCC') {
                    showSuccessNotification(response.message);
                } else {
                    showErrorNotification(response.message);
                }
            },
            complete: function () {
                _this.html(TOOLS.dt).removeAttr('disabled');
            }
        });
    });
});