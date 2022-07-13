const mapFrame = document.querySelector('#map');

function initMap() {

    // map options
    let options = {
        zoom:20,
        center:{lat:13.0332221,lng:77.6299528}
    }

    // map
    let mainMap = new google.maps.Map(mapFrame, options);

    // marker on map
    let marker = new google.maps.Marker({
        position: {lat:13.0332221,lng:77.6299528},
        map: mainMap,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    // marker Content
    let markerText = new google.maps.InfoWindow({
        content: '<h3>First place to visit</h3>'
    });

    // onclick of marker, text will visible
    marker.addListener('click', () => {
        markerText.open(map,marker);
    });

}