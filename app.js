$(function() {
    $(window).on('scroll', function() {
        var contentHeight = $('.text-container').height();
        var scroll = $(window).scrollTop();
        var scaleRatio = 10 - (scroll / (contentHeight - $(window).height() / 2)) * 10;
        var offset = 50;
        var scrollRatio = ((contentHeight - offset) - ($(window).height() / 2)) / scroll;
        var background = $('.zoom .background');
        var content1 = $('.content-1');
        var content2 = $('.content-2');
        var opacityRatio = 1 - (scroll / (contentHeight - $(window).height()));
        var opacityRatio2 = (scroll / (contentHeight - ($(window).height() / 2)));
        var top = ($(window).height() - $('.main-menu').outerHeight(true));

        // position background to always center
        if (scrollRatio < 1) {
            background.removeClass('sticky-bg');
            if (background.hasClass('topAdded') != true) {
                background.css('top', top);
                background.addClass('topAdded');
            }
        } else {
            background.addClass('sticky-bg');
            background.removeClass('topAdded');
        }
        if (scaleRatio > 1) {
            background.css('transform', 'scale(' + scaleRatio + ')')
        }
        if (scaleRatio <= 1) {
            background.css('transform', 'scale(1)')
        }
        content1.css('opacity', opacityRatio);
        content2.css('opacity', opacityRatio2);
    });
});
