
/* Adds smooth scroll down feature to nav links across all pages using jquery */

$(function(){
    $(".menu a").on('click', function(){
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2500);
    });
    if(window.location.hash){
        scroll(0,0);
        setTimeout(function(){
            scroll(0,0);
        }, 1);
    }
    if(window.location.hash){
        $("html, body").animate({
            scrollTop: $(window.location.hash).offset().top + 'px'
        }, 2500);
    }
});

/* Clicking on Find out more button displays & hides more specs */

$('.more-specs').hide();
$("#show").click(function (e) {
    e.preventDefault();
    $(".more-specs").toggle(1000);
});

$('.more-specs2').hide();
$("#show2").click(function (e) {
    e.preventDefault();
    $(".more-specs2").toggle(1000);
});

$('.more-specs3').hide();
$("#show3").click(function (e) {
    e.preventDefault();
    $(".more-specs3").toggle(1000);
});

$('.more-specs4').hide();
$("#show4").click(function (e) {
    e.preventDefault();
    $(".more-specs4").toggle(1000);
});

/* Renders the map & zooms in on location */

let map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 53.349957, lng: -6.260306 },
        zoom: 14
    });

    /* Adds a marker for my location */

    let labels = "A";

    let locations = [
        { lat: 53.349957, lng: -6.260306 },
    ];

    let markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    let markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

/* Operates the modal return mail function on newsletter request */
/*Calls the function*/
function sendMail(contactForm) {
    emailjs.send("gmail", "green_machine_newsletter", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
    })
        .then(
            function (response) {
                console.log("SUCCESS", response); /*On success it will return this message*/
            },
            function (error) {
                console.log("FAILED", error); /*When the function encounters an error it will return Failed*/
            }
        );
    return false;  // To block from loading a new page
}

/* Submitting a form and hiding it/ Hides the modal on users click of sign up */

$(document).ready(function () {
    $("#onSubmit").on('submit', function (e) {
        e.preventDefault();
        $('#elegantModalForm').modal('hide');
    });
});

/* Gets Users Geo Location On Click And Returns Nearest Store Information, If User Says No Will Return Else */

var x = document.getElementById("test-searchbox");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
/*This function will run when the user allows permission*/
function showPosition() {
  x.innerHTML = "Green-Machine " + "<br> 52-56 O'Connell Street Upper " +  "<br> North City " + "<br> Dublin" + "<br> 8PXQXV" + "<br> +353 (0)1 245 1034" + "<br> info@green-machine.com";
}
/*This function will run if the user selects NO*/
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}