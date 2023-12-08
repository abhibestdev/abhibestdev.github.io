$(document)
    .ready(function () {
        $.ajax({
            url: 'json_files/testimonials.json',
            dataType: 'json',
            success: function (data) {
                // Process the JSON data here
                const testimonials = data.testimonials;
                $.each(testimonials, function (index, quote) {
                    console.log(testimonials);
                    $('#quotes').append('<div class="block-holder" style="margin: 10px; width: 100%;"><div class="block" ' +
                            'style="background-color: #1F363D; width: 45%; margin: 2px; padding: 5px;"> <p><q' +
                            '>' + quote.quote + '</q> ~ ' + quote.author + '</p></div></div>')
                });
            }
        });
    });