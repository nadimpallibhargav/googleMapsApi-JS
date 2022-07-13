const mapFrame = document.querySelector('#map');

function initMap() {

    // map options
    let options = {
        zoom:20,
        center:{lat:13.0332221,lng:77.6299528}
    }

    // map
    let mainMap = new google.maps.Map(mapFrame, options);

    // click anywhere on the map
    google.maps.event.addListener(mainMap, 'click', (event) => {
        let coord = event.latLng;
        addMarker({cordinates:coord,content: `<h3>${event.latLng}</h3>` });
    });

    // function for adding markers
    function addMarker(mapProperties) {     
        let marker = new google.maps.Marker({
            position: mapProperties.cordinates,
            map: mainMap,
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        });

        if(mapProperties.content) {
            let markerText = new google.maps.InfoWindow({
                content: mapProperties.content
            });

            marker.addListener('click', () => {
                markerText.open(map,marker);
            });
        }
    }

    // array of markers
    let mapMarkers = [
        {
            cordinates: {
                lat:13.0332221,
                lng:77.6299528
            }, 
            content: '<h3>First place to visit</h3>'
        },
        {
            cordinates: {
                lat:13.0332221,
                lng:77.6299800
            }, 
            content: '<h3>Second place to visit</h3>'
        }
    ];

    // looping array of markers
    mapMarkers.forEach((mapmarks) => {
        addMarker(mapmarks);
    })

}