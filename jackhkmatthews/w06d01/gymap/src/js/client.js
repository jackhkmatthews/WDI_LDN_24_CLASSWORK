const Gym = Gym || {};
const google = google;

Gym.mapSetup = function() {
  const canvas = document.getElementById('map-container');

  const mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(51.506178,-0.088369),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  this.map = new google.maps.Map(canvas, mapOptions);
  this.getGyms();
};

Gym.getGyms = function() {
  $.get('http://localhost:3000/gyms').done(this.loopThroughArray);
};

Gym.loopThroughArray = function(data) {
  // binding the value of this to be the Gym object
  // $.each(data, function(index, gym) {
  //   console.log(this);
  // }.bind(Gym));

  $.each(data, (index, gym) => {
    Gym.addMarkerForGym(gym);
  });
};

Gym.addMarkerForGym = function(gym) {
  const latlng = new google.maps.LatLng(gym.lat, gym.lng);

  const marker = new google.maps.Marker({
    position: latlng,
    map: this.map
  });

  this.addInfoWindowForGym(gym, marker);
};

Gym.addInfoWindowForGym = function(gym, marker) {
  google.maps.event.addListener(marker, 'click', () => {
    if (typeof this.infoWindow !== 'undefined') this.infoWindow.close();

    this.infoWindow = new google.maps.InfoWindow({
      content: `
      <div class="info-window">
        <img src=${ gym.image }><p>${ gym.name }</p>
      </div>
      `
    });

    this.infoWindow.open(this.map, marker);
  });
};

$(Gym.mapSetup.bind(Gym));
