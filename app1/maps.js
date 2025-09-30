// Coordonnées GPS pour Villepinte
const villepinteLocations = [
  ["Lycee Jean Rostand", 48.959136, 2.545756, 1, "Lycee public Jean Rostand"],
  ["Point 2", 48.960916, 2.542787, 1, "Point 2 "],
  ["Point 3", 48.959240, 2.548237, 1, "Point 3 "],
  ["Point 4", 48.959803, 2.548774, 1, "Point 4 "],
  ["Point 5", 48.961606, 2.553237, 1, "Point 5 "],
  ["Point 6", 48.963382, 2.550126, 1, "Point 6 "]
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

  const infowindow = new google.maps.InfoWindow();

  for (let i = 0; i < villepinteLocations.length; i++) {
    const location = villepinteLocations[i];
    
    const marker = new google.maps.Marker({
      position: { lat: location[1], lng: location[2] },
      map: map,
      icon: icon,  
      title: location[0],
      zIndex: location[3],
    });

    marker.addListener("click", function () {
      infowindow.setContent(`
        <div>
          <h3>${location[0]}</h3>
          <p>${location[4]}</p> <!-- Description du marqueur -->
        </div>
      `);
      infowindow.open(map, marker); 
    });
  }
}

window.initMap = initMap;
