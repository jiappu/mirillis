menu.onclick = function myFunction()	{
	var x = document.getElementById("myTopnav");

	if (x.className === "topnav") {
		x.className += " responsive";
	} else{
		x.className = "topnav"
	}
}

function initMap() {
  var uluru = {lat: 50.440068, lng: 30.5245493};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}