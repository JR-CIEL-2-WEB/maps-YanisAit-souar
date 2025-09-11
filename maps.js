// Coordonnées GPS pour Villepinte
const villepinteLocations = [
  ["Lycée Georges Brassens", 48.9580, 2.5450, 1],  
  ["Stade Municipal", 48.9600, 2.5380, 2],         
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 48.9580, lng: 2.5450 },  
  });

  setMarkers(map);
}


function setMarkers(map) {

  const icon = {
    url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",  
    scaledSize: new google.maps.Size(32, 32),  
  };

  for (let i = 0; i < villepinteLocations.length; i++) {
    const location = villepinteLocations[i];
    new google.maps.Marker({
      position: { lat: location[1], lng: location[2] },
      map: map,
      icon: icon,  
      title: location[0],
      zIndex: location[3],
    });
  }
}

window.initMap = initMap;
