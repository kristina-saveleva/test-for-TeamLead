$(function () {
    $('.rev-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
    function countDown() {
        var seconds = 1800;
        var timer = setInterval(function () {
            if (seconds > 0) {
                seconds--;
                var h = seconds / 3600 ^ 0,
                    m = (seconds - h * 3600) / 60 ^ 0,
                    s = seconds - h * 3600 - m * 60,
                    time = (h < 10 ? "0" + h : h) + " ч. " + (m < 10 ? "0" + m : m) + " мин. " + (s < 10 ? "0" + s : s) + " сек.";
                $(".minutes").text(time);
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }
    $(function () {
        countDown()
    });
    $(function () {
        $('p.jQtooltip').each(function () {
            var el = $(this);
            var title = el.attr('title');
            if (title && title != '') {
                el.attr('title', '').append('<div>' + title + '</div>');
                var width = el.find('div').width();
                var height = el.find('div').height();
                el.hover(
                    function () {
                        el.find('div')
                            .clearQueue()
                            .delay(200)
                            .show();
                    },
                    function () {
                        el.find('div')
                            .hide();
                    }
                ).mouseleave(function () {
                    if (el.children().is(':hidden')) el.find('div').clearQueue();
                });
            };
        });
    });
});