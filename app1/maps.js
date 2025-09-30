function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 48.9580, lng: 2.5450 },  // Position centrale de Villepinte
  });

  
  fetch('markersJrostand.json')
    .then(response => response.json())  
    .then(data => {
      setMarkers(map, data);  
    })
    .catch(error => console.error('Erreur de chargement du fichier JSON:', error));
}

function setMarkers(map, markersData) {
  const icon = {
    url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    scaledSize: new google.maps.Size(32, 32), 
  };

  const infowindow = new google.maps.InfoWindow(); 

  markersData.forEach(markerData => {
    const marker = new google.maps.Marker({
      position: { lat: markerData.lat, lng: markerData.lng },
      map: map,
      icon: icon,
      title: markerData.name,
    });

    marker.addListener("click", function () {
      const contentString = `
        <div>
          <h3>${markerData.name}</h3>
          <p><strong>ID du marqueur : </strong>${markerData.id}</p>
          <p>${markerData.description}</p>
        </div>
      `;
      infowindow.setContent(contentString);
      infowindow.open(map, marker); 
    });
  });
}

window.initMap = initMap;
