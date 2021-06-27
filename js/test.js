(function($){
    $.fn.snow = function(options){
    var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '100%'}).html('·'),
    documentHeight 	= $(document).height(),
    documentWidth	= $(document).width(),
    defaults = {
        minSize		: 30,
        maxSize		: 50,
        newOn		: 1000,
        flakeColor	: "#ffffff" 
    },
    options	= $.extend({}, defaults, options);
    var interval= setInterval( function(){
    var startPositionLeft = Math.random() * documentWidth - 100,
    startOpacity = 0.1 + Math.random(),
    sizeFlake = options.minSize + Math.random() * options.maxSize,
    endPositionTop = documentHeight - 700,
    endPositionLeft = startPositionLeft,
    durationFall = documentHeight * 10 + Math.random() * 5000;
    $flake.clone().appendTo('body').css({
        left: startPositionLeft,
        opacity: 0.5,
        'font-size': sizeFlake,
        color: options.flakeColor
    }).animate({
        top: 0,
        left: endPositionLeft,
        opacity: 0.5
    },durationFall,'linear',function(){
        $(this).remove()
    });
    }, options.newOn);
    };
})(jQuery);
$(function(){
    $.fn.snow({ 
        minSize: 30,
        maxSize: 100,
        newOn: 50  
    });
});