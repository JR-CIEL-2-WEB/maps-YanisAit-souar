window.onload = () => {
  const select = document.getElementById("courseSelect");
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 46.0, lng: 2.0 },
    zoom: 6
  });
  const infowindow = new google.maps.InfoWindow();
  let markersOnMap = [];

  fetch("course.json")
    .then(resp => resp.json())
    .then(courses => {


      courses.forEach(course => {
        const option = document.createElement("option");
        option.value = course.id;
        option.textContent = course.name;
        select.appendChild(option);
      });

      select.addEventListener("change", () => {
        const selectedId = parseInt(select.value);
        if (!selectedId) return;

        const course = courses.find(c => c.id === selectedId);
        if (!course) return;

        markersOnMap.forEach(m => m.setMap(null));
        markersOnMap = [];

      
        course.markers.forEach((m, index) => {
          const marker = new google.maps.Marker({
            position: { lat: m.lat, lng: m.lng },
            map: map,
            title: `${course.name} - Point ${index+1}`
          });

          marker.addListener("click", () => {
            infowindow.setContent(`
              <div>
                <h3>${course.name}</h3>
                <p>Point ${index+1}</p>
                <p>Lat: ${m.lat}, Lng: ${m.lng}</p>
              </div>
            `);
            infowindow.open(map, marker);
          });

          markersOnMap.push(marker);
        });

        const path = course.markers.map(m => ({ lat: m.lat, lng: m.lng }));
        const polyline = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        polyline.setMap(map);

        map.setCenter({ lat: path[0].lat, lng: path[0].lng });
        map.setZoom(12);
      });

    })
    .catch(err => console.error("Erreur chargement courses :", err));
};
