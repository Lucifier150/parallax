$(function () {
    $(window).on('scroll', function () {
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
        } 
        else {
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

//  we clone the card template, update the title and text content, and append the modified card to the container!

$(document).ready(function () {
    // Get references to container and template
    var cardContainer = $('#cardContainer');
    var cardTemplate = $('#cardTemplate').children().eq(0);

    // Data for each card
    var cardData = [
        { title: "GRAPHICS DESIGN", text: ["Logo Design", "Brand Style Guides", "Game Design"], icon: "fa-solid fa-bullhorn" },
        { title: "WEB DESIGN", text: ["UI/UX Design", "Responsive Design", "Prototyping"], icon: "fa-regular fa-pen-to-square" },
        { title: "DIGITAL MARKETING", text: ["Email Marketing", "Digital Marketing", "Podcast Marketing"], icon: "fa-solid fa-earth-asia" },
        { title: "WEB DEVELOPMENT", text: ["Mobile Apps", "Game Development", "E-Commerce Development"], icon: "fa-solid fa-bullhorn" },
        { title: "WRITING & TRANSLATION", text: ["Articles & Blog Posts", "Technical Writing", "Website Content"], icon: "fa-regular fa-pen-to-square" },
        { title: "MUSIC & AUDIO", text: ["Voice Over", "Mixing & Mastering", "Songwriters"], icon: "fa-solid fa-earth-asia" }
        // Add more objects for each card's data
    ];

    // Create and append cards
    $.each(cardData, function (index, data) {
        var cardClone = cardTemplate.clone(); // Clone the card template
        var titleElement = cardClone.find('.card-title');
        var textContainer = cardClone.find('.card-iiner-text');
        var iconElement = cardClone.find('.fa-regular');

        // Update title
        titleElement.text(data.title);

        // Update text
        $.each(data.text, function (index, text) {
            var paragraph = $('<p>').text(text);
            textContainer.append(paragraph);
        });
        iconElement.removeClass('fa-regular').addClass(data.icon);

        cardContainer.append(cardClone); // Append the cloned card to the container
    });
});
