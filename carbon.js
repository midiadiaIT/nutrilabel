
;
(function($) {
    $.fn.carbon = function(option, settings) {
        var value = $(this).attr('data-value');
        var template = '<div class="kpi-carbon"">\
            <div class="inner">' + value + '</div>\
            <div class="disclaimer">Raciones de Carbohidratos</div>\
            <div class="explanation" title="Este es el número de raciones de carbohidratos que contienen 100g/ml de este producto. Cada 10gr. de carbohidratos totales de un producto suponen una ración">?</div>\
        </div>';


        $(this).html(template);


    };
})(jQuery);
