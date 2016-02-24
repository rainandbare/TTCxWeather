
var map;

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(0, 0),
  });
}

directionsDisplay.setPanel(document.getElementById('right-panel'));

function moveToLocation(lat, lng){
	var center= new google.maps.LatLng(lat, lng);
	map.panTo(center);
}


var userStart = prompt('What is the address of your location?');

var userEnd = prompt('What is the address of where you want to go?');

function calculateAndDisplayRoute(directionsService, directionsDisplay){
	directionsService.route({
		origin: userStart,
		destination: userEnd,
		travelMode:google.mapsTravelMode.WALKING
	}, function(response,status) {
		if (status === google.maps.DirectionsSatus.OK){
			directionsDisplay.setDirections(response);
		} else{
			window.alert('Directions request failed due to ' + status);
		}
	});
}

