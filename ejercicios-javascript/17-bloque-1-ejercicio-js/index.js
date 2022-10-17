function initMap() {
  const tajoToledo = { lat: 39.869070, lng: -4.013169 };
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: tajoToledo,
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });
  
  const labels = `${/A-Z/}`;
  const markers = locations.map(( position, i ) => {
    const label = labels[ i % labels.length ];
    const marker = new google.maps.Marker({
      position,
      map,
    });
    
    marker.addListener("click", () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
    });
    return marker;
  });

  new MarkerClusterer({ markers, map });
  
};

const locations = [
  { lat: 39.869070, lng: -4.013169 },
  { lat: 38.166373644241126, lng: -0.47432421876704955 },
  { lat: 40.4501353068216, lng: -3.6981600517698245 },
];

window.initMap = initMap;