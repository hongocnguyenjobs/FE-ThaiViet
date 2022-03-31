"use strict";
const resize = (() => {
    /* Custom set rate element */
    const setRateElement = (objects, x, y) => {
        var w = x || 5;
        var h = y || 3;
        objects.each(function () {
            $(this).height($(this).width() * h / w);
        });
    }
    // setRateElement($('.jsSetRate-5-3'));
    setRateElement($('.jsSetRate-7-5'), 7, 5);
    // setRateElement($('.jsSetRate-9-5'), 9, 5);
    // setRateElement($('.jsSetRate-1-1'), 1, 1);
    // setRateElement($('.jsSetRate-2-1'), 2, 1);
    // setRateElement($('.jsSetRate-8-5'), 8, 5);
    // setRateElement($('.jsSetRate-9-10'), 9, 10);
    // setRateElement($('.jsSetRate-6-5'), 6, 5);
    // setRateElement($('.jsSetRate-7-8'), 7, 8);
    // setRateElement($('.jsSetRate-4-3'), 4, 3);


    /* Browser resize */
    let timer;
    $(window).resize(function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            // setRateElement($('.jsSetRate-5-3'));
            setRateElement($('.jsSetRate-7-5'), 7, 5);
            // setRateElement($('.jsSetRate-9-5'), 9, 5);
            // setRateElement($('.jsSetRate-1-1'), 1, 1);
            // setRateElement($('.jsSetRate-2-1'), 2, 1);
            // setRateElement($('.jsSetRate-8-5'), 8, 5);
            // setRateElement($('.jsSetRate-9-10'), 9, 10);
            // setRateElement($('.jsSetRate-6-5'), 6, 5);
            // setRateElement($('.jsSetRate-7-8'), 7, 8);
            // setRateElement($('.jsSetRate-4-3'), 4, 3);

        }, 300);
    });
})();

export default resize;