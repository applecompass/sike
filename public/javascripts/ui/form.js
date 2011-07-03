//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            form.js
// Defines:
// Dependencies:
// Description:     JS UI functions for forms
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function($) {

    var Form = function() {

        var hint = function() {
            //ZM.Dom.textHint('#sb-mail', '#sb-mail-hint');
        };

        var validEmail = function() {

            var $el = $elMail;

            $el.blur(function() {
                var txt = this.value;

                if (txt !== "") {
                    if (!ZM.Dom.mailValid(txt)) {
                        $(this).next().show().find(".fb-tip-msg").empty().append(ZM.Config.Msg.Format.mail);
                    }
                    else {
                        $(this).next().hide();
                    }
                }
                else {
                    $(this).next().hide();
                }
            });

        };

        var validUserName = function() {

            var $el = $elName;

            $el.blur(function() {
                var txt = this.value;

                if (txt.length >= 12) {
                    $(this).next().show().find(".fb-tip-msg").empty().append(ZM.Config.Msg.Format.username.format(ZM.Config.Value.maxUsername));
                }
                else {
                    $(this).next().hide();
                }
            });

        };

        var validPassword = function() {

            var $el = $elPass;

            $el.blur(function() {
                var txt = this.value,
                    l = txt.length;

                if (l > 12 || l < 6) {
                    $(this).next().show().find(".fb-tip-msg").empty().append(ZM.Config.Msg.Format.password);
                }
                else {
                    $(this).next().hide();
                }
            });

        };

        var validNull = function() {
	
			var result = true;

            if ($elMail[0].value === "") {
                $elMail.next().show().find(".fb-tip-msg").empty().append(ZM.Config.Msg.Valid.mail);
				result = false;
            }
            if ($elName[0].value === "") {
                $elName.next().show().find(".fb-tip-msg").empty().append(ZM.Config.Msg.Valid.username);
				result = false;
            }
            if ($elPass[0].value === "") {
                $elPass.next().show().find(".fb-tip-msg").empty().append(ZM.Config.Msg.Valid.password);
				result = false;
            }

			return result;

        };

        var check = function() {
            $elChk.change(function() {
                var isAgree = this.checked;
                if (isAgree) {
                    $elSubmit.addClass("outerglow");
                    $elSubmit.removeClass("btn-disable");
                }
                else {
                    $elSubmit.removeClass("outerglow");
                    $elSubmit.addClass("btn-disable");
                }
            });
        };

        var submit = function() {

            $elSubmit.click(function() {
                if ($elChk[0].checked) {
                    if(validNull()){
						$elSubmitInput.click();
					}
                }
                return false;
            });
        };

        var $elMail = $("#user_email");
        var $elName = $("#user_nickname");
        var $elPass = $("#user_password");
        var $elSubmit = $("#fb-createuser");
		var $elSubmitInput = $("#fb-createuser-submit");
        var $elChk = $("#fb-chk-protocal");

        var valid = function() {
            validEmail();
            validUserName();
            validPassword();
            check();
            submit();
        };

        this.init = function() {
            valid();
        };
    };

    ZM.UI.Form = {

        init: function() {

            var form = new Form;
            form.init();

        }

    };

})(jQuery);