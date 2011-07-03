//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            reg.js
// Defines:
// Dependencies:
// Description:     this is the document ready functions for reg page
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function($) {

    var Plan = function() {

        var $elBox = $("#fnb-planlist");
        var $elForm = $("#form-function");
        var $elHour = $("#fnb-hour");

        var edit = function() {
            $elBox.find(" > a").live("click", function() {

                var val = $(this).find("span.ph-val").text();
                switch (val) {
                    case "1":
                    default:
                        $elHour.addClass("ph-one");
                        $elHour.find("span.ph-val").text(val);
                        break;
                    case "10":
                        $elHour.addClass("ph-ten");
                        $elHour.find("span.ph-val").text(val);
                        break;
                    case "100":
                        $elHour.addClass("ph-hdrd");
                        $elHour.find("span.ph-val").text(val);
                        break;
                }

                $elBox.hide();
                $elForm.show("fast").animate(
                    {
                        left: 30
                    },
                    {
                        duration: 200
                    }
                );
            });
        };

        this.reset = function() {
            $elForm.animate(
                {
                    left: "-100%"
                },
                {
                    duration: 400,
                    complete: function() {
                        $elForm.css("left", "100%").hide();
                        $elBox.show()
                    }
                }
            );
        };

        this.init = function() {
            edit();
        };

    };

    var Burn = function() {

        var $elSubmit = $("#fnb-submit");
        var cssClass = "btn-disable";

        var validNumeric = function() {

            var el = $("#fnb-input")[0],
                $elErr = $("#fnb-err");

            var handle = function() {
                var txt = el.value;
                var maxMin = parseInt($("#fnb-hour span.ph-val").text()) * 60;

                if (txt !== "") {
                    if (!isNaN(txt)) {
                        if (txt <= maxMin) {
                            $elSubmit.removeClass(cssClass);
                            $elErr.html("");
                        }
                        else {
                            $elSubmit.addClass(cssClass);
                            $elErr.html(ZM.Config.Msg.Valid.outside);
                        }
                    }
                    else {
                        $elSubmit.addClass(cssClass);
                        $elErr.html(ZM.Config.Msg.Valid.numeric);
                    }
                }
                else {
                    $elSubmit.addClass(cssClass);
                    $elErr.html("");
                }
            };

            // input text change event
            if ($.browser.msie) {
                el.onpropertychange = handle;
            }
            else {
                el.addEventListener("input", handle, false);
            }
            el.addEventListener("blur", handle, false);

        };

        var clickSubmit = function() {

            $("#fnb-submit").click(function() {
                if (!$(this).hasClass(cssClass)) {
                    $("#fnb-input-submit").click();
                    var objPlan = new Plan();
                    objPlan.reset();
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
            var objBurn = new Burn();
            objBurn.init();

            var objPlan = new Plan();
            objPlan.init();
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