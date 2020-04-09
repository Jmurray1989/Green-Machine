
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

/* Adds smooth scroll up feature from footer links across all pages using jquery */

$(function(){
    $(".footer-links a").on('click', function(){
        $("html, body").animate({
            scrollTop: $(window.location.hash).offset().top 
        }, 2500);
    });
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

function sendMail(contactForm) {
    emailjs.send("gmail", "green_machine_newsletter", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}

/* Submitting a form and hiding it */

$(document).ready(function () {
    $("#onSubmit").on('submit', function (e) {
        e.preventDefault();
        $('#elegantModalForm').modal('hide');
    });
});

/* Option Selector For Test Drive Section */

let img = document.getElementById("image");
let text = document.getElementById("text");

function setClass(e) {
  let select = e.target;
  img.src = select.options[select.selectedIndex].value;
  text.innerHTML = select.options[select.selectedIndex].dataset.description;
  return false;
}

document.getElementById("scooterdropdown").onchange = setClass;

/* Gets Users Geo Location On Click And Returns Nearest Store Information, If User Says No Will Return Else */

var x = document.getElementById("test-searchbox");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition() {
  x.innerHTML = "Green-Machine " + "<br> 52-56 O'Connell Street Upper " +  "<br> North City " + "<br> Dublin" + "<br> 8PXQXV" + "<br> +353 (0)1 245 1034" + "<br> info@green-machine.com";
}

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