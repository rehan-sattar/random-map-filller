export interface IMappable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
}
export class CustomMap {
  private googleMaps: google.maps.Map;
  constructor(elementId) {
    this.googleMaps = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: IMappable) {
    const marker = new google.maps.Marker({
      map: this.googleMaps,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMaps, marker);
    });
  }
}
