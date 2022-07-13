var mapFrame = document.querySelector('#map');

function initMap() {
    var options = {
        zoom:20,
        center:{lat:13.0332221,lng:77.6299527}
    }
    var map = new google.maps.Map(mapFrame, options);
}