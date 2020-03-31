
/*Adds smooth scroll feature to nav links using jquery*/
$('nav li').click(function (event) {

    var target = $(this).find('a').attr('href');
    smoothScroll(target);

});

function smoothScroll(target) {
    $('body, html').animate({
        scrollTop: $(target).offset().top
    }, 2000);
}

/*Clicking on Find out more button displays & hides more specs*/

$('.more-specs').hide();
$("#show").click(function (e) {
    e.preventDefault();
    $(".more-specs").toggle(1000)
});

$('.more-specs2').hide();
$("#show2").click(function (e) {
    e.preventDefault();
    $(".more-specs2").toggle(1000)
});

$('.more-specs3').hide();
$("#show3").click(function (e) {
    e.preventDefault();
    $(".more-specs3").toggle(1000)
});

$('.more-specs4').hide();
$("#show4").click(function (e) {
    e.preventDefault();
    $(".more-specs4").toggle(1000)
});


/*Clicking on the Arrow will return you HOME*/
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function () {
    $("#back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
    });

});

/*Renders the map & zooms in on location*/
var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 53.349957, lng: -6.260306 },
        zoom: 14
    });

    /*Adds a marker for my location*/

    var labels = "A";

    var locations = [
        { lat: 53.349957, lng: -6.260306 },
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}