//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            reg.js
// Defines:
// Dependencies:
// Description:     this is the document ready functions for reg page
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function($) {

    var Event = function() {

        var validNumeric = function() {

            $("#fnb-input").blur(function() {
                var txt = this.value;

                if (txt !== "") {
                    if (!isNaN(txt)) {
                        $("#fnb-submit").removeClass("btn-disable");
                    }
                    else {
                        $("#fnb-submit").addClass("btn-disable");
                        alert(ZM.Config.Msg.Valid.numeric);
                    }
                }
                else {
                    $("#fnb-submit").addClass("btn-disable");
                }

            });

        };

        var clickSubmit = function() {

            $("#fnb-submit").click(function() {
                if (!$(this).hasClass(".btn-disable")) {
                    $("#fnb-input-submit").click();
                }
                return false;
            });

        };

        this.init = function() {
            validNumeric();
            clickSubmit();
        };
    };

    ZM.UI.Mypage = {
        init: function() {
            var objEvent = new Event();
            objEvent.init();
        }
    };

})(jQuery);

// Document Ready.
jQuery(function($) {

    ZM.UI.Mypage.init();

});

// Window Onload.
ZM.windowOnload = window.onload;
window.onload = function() {
    if (ZM.windowOnload) {
        ZM.windowOnload();
    }
    // Your code here
};