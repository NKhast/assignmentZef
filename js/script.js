$(document).load($(window).bind("resize", listenWidth));

    function listenWidth( e ) {
        if($(window).width()<831)
        {
            $(".checkout-info").remove().insertAfter($(".form-section"));
        } else {
            $(".checkout-info").remove().insertBefore($(".form-section"));
        }
    }



