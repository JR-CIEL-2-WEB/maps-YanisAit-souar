window.onload = loadDoc;

function loadDoc() {
  fetch('markersJrostand.json')
    .then(response => {
      if (!response.ok) throw new Error('Erreur réseau');
      return response.json();
    })
    .then(markers => {
      console.log("Données JSON chargées :", markers);

      // Centre de la carte = premier point du fichier
      const center = markers.length > 0
        ? { lat: markers[0].lat, lng: markers[0].lng }
        : { lat: 48.9593, lng: 2.5477 };

      const map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 15
      });

      // InfoWindow réutilisable
      const infowindow = new google.maps.InfoWindow();

      // Création des marqueurs
      markers.forEach(markerData => {
        const marker = new google.maps.Marker({
          position: { lat: markerData.lat, lng: markerData.lng },
          map: map,
          title: markerData.name
        });

        // Clic sur le marqueur → InfoWindow
        marker.addListener('click', () => {
          infowindow.setContent(`
            <div>
              <h3>${markerData.name}</h3>
              <p><strong>ID :</strong> ${markerData.id}</p>
              <p>${markerData.description}</p>
            </div>
          `);
          infowindow.open(map, marker);
        });
      });

      // Trier les marqueurs par ID avant de tracer la polyligne
      const sortedMarkers = markers.sort((a, b) => a.id - b.id);

      if (sortedMarkers.length > 1) {
        const polyline = new google.maps.Polyline({
          path: sortedMarkers.map(m => ({ lat: m.lat, lng: m.lng })),
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        polyline.setMap(map);
      }
    })
    .catch(error => {
      console.error('Erreur lors du chargement des marqueurs :', error);
    });
}
