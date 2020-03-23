/*Renders the map & zooms in on location*/
var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 53.349957, lng: -6.260306},
          zoom: 14
        });

    /*Adds a marker for my location*/

    var labels = "A";

    var locations = [
        { lat: 53.349957, lng: -6.260306 }, 
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}