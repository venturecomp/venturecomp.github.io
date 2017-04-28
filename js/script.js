// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    alert("This is meant for mobile (specifically iPhone 6). Please open the console in Chrome to view in mobile.");
//////////////// This Code Allows Geolocation to Work///////////////////////
    var lat;
    var lng;

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates);
        } else {
            alert("4");
        }
    }

    function getCoordinates(position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;

        // now latitude and longitude are available

    }
    getLocation();

    mapboxgl.accessToken = 'pk.eyJ1IjoibG5xdWFuIiwiYSI6ImNpejkwbGxlbjAxYXYyd284d2EyMmt1djQifQ.n0tAM06NGvw7Q4SEEdbY4w';

    var map = new mapboxgl.Map({
        container: 'map',
        ////////Centers to Current Location, but doesn't work with MapBox's JS ///////
        style: 'mapbox://styles/lnquan/cj031ahqh001v2rsb2qz83etk'
    });
    console.log("var map testing");
// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    }


}));

  console.log("location accuracy loaded");

  map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken

}));

var menuButton = document.getElementById('menuButton');

menuButton.addEventListener('click', function() {
  menu.style.display="block";
  console.log("menu show");

    });
    menuButton2.addEventListener('click', function() {
      menu.style.display="none";
      console.log("menu close");

        });

//////////////////////////////////////




});
