$(window).resize(function(){
'use strict';
    $('.pie').css({
        position:'absolute',
        left: ($(window).width() - $('.pie').outerWidth())/2,
        top: ($(window).height() - $('.pie').outerHeight())/2
    });

});

// To initially run the function:
$(window).resize();
