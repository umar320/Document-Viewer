    $(function () {
        $('#btnUpload').click(function (e) {
            e.preventDefault();

            // Get the file from File upload
            var fileUpload = $("#FileUpload1").get(0);
            var files = fileUpload.files;
            var test = new FormData();
            for (var i = 0; i < files.length; i++) {
                test.append(files[i].name, files[i]);
            }
            // Post the uploaded file to the http handler 
            $.ajax({
                url: "UploadHandler.ashx",
                type: "POST",
                contentType: false,
                processData: false,
                data: test,
                success: function (result) {

                    // in a case of file successfully saved the the function would be called to generate the output
                    GenerateOutput(result);
                },
                error: function (err) {
                    if (err.status == 422)
                        alert('Please upload a valid MS Word file');
                    else
                        alert(err.statusText);
                }
            });
        });
    })

    function GenerateOutput(filepath) {

        // make an ajax request to retrieve convert and retrieve the HTML text of uploaded word document.
        $.ajax({
            url: "MainHandler.ashx",
            contentType: "application/json; charset=utf-8",
            dataType: "html",
            cache: false,
            data: 'action=getWordtoHtml&filepath=' + filepath,
            responseType: "html",
            beforeSend: onProgress,
            success: GenerateHtml,
            complete: onComplete,
            error: onFail
        });

        return false;
    }

    function onProgress() {
        $('#resultDiv').text('Working.......');
    }
    function GenerateHtml(result) {
        // in a case of success the returned result would be written in the result box
        $('#resultDiv').html(result);

    }
    function onComplete() {
        alert('Working Complete');
    }
    function onFail(err) {

        $('#resultDiv').text(err.statusText);
    }