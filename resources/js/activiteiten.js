// Masonry grid voor activiteiten initialiseren

var $grid = $('#activiteiten').masonry({
    // options
    itemSelector: '.card',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: '.gutter-sizer',
    horizontalOrder: true
});

// Masonry layout opnieuw doen na elke geladen afbeelding

$grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
});

// Scroll naar links
// Bind to the click of all links with a #hash in the href
$('a[href^="#"]').click(function (e) {
    // Prevent the jump and the #hash from appearing on the address bar
    e.preventDefault();
    var hashId = this.hash;
    // Scroll the window, stop any previous animation, stop on user manual scroll
    // Check https://github.com/flesler/jquery.scrollTo for more customizability
    $(window).stop(true).scrollTo(this.hash, {
        duration: 800,
        interrupt: true,
        offset: {
            top: -80
        },
        onAfter: function (hashId) {
            // highlight activity
            $(hashId).effect('highlight', {
                color: 'rgba(23, 162, 184, 0.2)'
            }, 1000);
        }
    });
});