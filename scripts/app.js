jQuery(document).ready(function($) {
    'use strict';

    $('.toggle-nav').on('click', function() {
        $('.more-info').show();
        $('.more-info-opener').remove();
    })
});
