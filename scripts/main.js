(function ($) {
    var loader = $('#loader')
    var window = $(window)
    var body = $(body)
    var content = $('.content')

    loader.fadeIn(500)

    $(window).on('load', function () {
        loader.fadeOut(500)
        content.fadeIn(1000)
    })
})(jQuery)
