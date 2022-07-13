const mapFrame = document.querySelector('#map');

function initMap() {

    // map options
    let options = {
        zoom:20,
        center:{lat:13.0332221,lng:77.6299528}
    }

    // map
    let mainMap = new google.maps.Map(mapFrame, options);

    function addMarker(cordinates) {        
        let marker = new google.maps.Marker({
            position: cordinates,
            map: mainMap,
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        });
    }

    addMarker({lat:13.0332221,lng:77.6299528});
    addMarker({lat:13.0332221,lng:77.6299800});

}