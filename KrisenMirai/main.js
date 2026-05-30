$(document).ready(function() {
    $(".js-switch").click(function() {
        $(".main-content").toggleClass("as-card");
    });

    // code for image preview
    var reader = new FileReader();
    reader.onload = function(e) {
        $("#imager").attr("src", e.target.result);
    };

    function readURL(input) {
        if (input.files && input.files[0]) {
            $("#imager").css("visibility", 'visible');
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#image-input").change(function() {
        readURL(this);
    });


    $('.js-switch').on('click', function() {
        $('#imager').toggleClass('hidden').toggleClass('visible');
        $('#imager2').toggleClass('hidden').toggleClass('visible');
    });

    // Initially set imager2 to hidden
    $('#imager2').addClass('hidden');
    $('#imager').addClass('visible');
});