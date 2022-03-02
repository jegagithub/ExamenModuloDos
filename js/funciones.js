$(document).ready(function() {
    $("#beach").hover(
        function() {
            $('body').css('background-image', 'url(img/beach.jpg)');
        }
    );

    $("#forest").hover(
        function() {
            $('body').css('background-image', 'url(img/forest.jpg)');
        }
    );

    $("#snow").hover(
        function() {
            $('body').css('background-image', 'url(img/snow.jpg)');
        }
    );

    $("#earth").hover(
        function() {
            $('body').css('background-image', 'url(img/earth.jpg)');
        }
    );

    $("#dojo").hover(
        function() {
            $('body').css('background-image', 'url(img/dojo.jpg)');
        }
    );
    $("#matrix").hover(
        function() {
            $('body').css('background-image', 'url(img/matrix.jpg)');
        }
    );

})

function seleccionajugador1(imagen) {
    var img = document.getElementById('imagenJugador1');
    var img_dir = "./img/";

    if (img) {
        img.src = img_dir + imagen;
    }
}

function seleccionajugador2(imagen) {
    var img = document.getElementById('imagenJugador2');
    var img_dir = "./img/";

    if (img) {
        img.src = img_dir + imagen;
    }

}