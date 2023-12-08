$(document)
    .ready(function () {
        $('#toobin')
            .click(function () {
                $.ajax({
                    url: 'json_files/toobin.json',
                    dataType: 'json',
                    success: function (data) {
                        // Process the JSON data here
                        console.log(data);

                        // Access the 'speakers' array, for example:
                        const speakers = data.speakers;
                        $.each(speakers, function (index, speaker) {
                            $('#title').text(speaker.title);
                            $('#month').text(speaker.month);
                            $('#speaker').text(speaker.speaker);
                            $('#image').attr('src', speaker.image);
                            $('#image').attr('alt', "toobin_image");
                            $('#text').html(speaker.text);
                        });
                    }
                });
            });
        $('#sorkin').click(function () {
            $.ajax({
                url: 'json_files/sorkin.json',
                dataType: 'json',
                success: function (data) {
                    // Process the JSON data here
                    console.log(data);

                    // Access the 'speakers' array, for example:
                    const speakers = data.speakers;
                    $.each(speakers, function (index, speaker) {
                        $('#title').text(speaker.title);
                        $('#month').text(speaker.month);
                        $('#speaker').text(speaker.speaker);
                        $('#image').attr('src', speaker.image);
                        $('#image').attr('alt', "sorkin_image");
                        $('#text').html(speaker.text);
                    });
                }
            });
        });
        $('#chua').click(function () {
            $.ajax({
                url: 'json_files/chua.json',
                dataType: 'json',
                success: function (data) {
                    // Process the JSON data here
                    console.log(data);

                    // Access the 'speakers' array, for example:
                    const speakers = data.speakers;
                    $.each(speakers, function (index, speaker) {
                        $('#title').text(speaker.title);
                        $('#month').text(speaker.month);
                        $('#speaker').text(speaker.speaker);
                        $('#image').attr('src', speaker.image);
                        $('#image').attr('alt', "chua_image");
                        $('#text').html(speaker.text);
                    });
                }
            });
        });
        $('#sampson').click(function () {
            $.ajax({
                url: 'json_files/sampson.json',
                dataType: 'json',
                success: function (data) {
                    // Process the JSON data here
                    console.log(data);

                    // Access the 'speakers' array, for example:
                    const speakers = data.speakers;
                    $.each(speakers, function (index, speaker) {
                        $('#title').text(speaker.title);
                        $('#month').text(speaker.month);
                        $('#speaker').text(speaker.speaker);
                        $('#image').attr('src', speaker.image);
                        $('#image').attr('alt', "sampson_image");
                        $('#text').html(speaker.text);
                    });
                }
            });
        });
    }); // end ready