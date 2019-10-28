import { User } from './User';
import { Company } from './Company';

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

  addUserMarker(user: User) {
    new google.maps.Marker({
      map: this.googleMaps,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    });
  }

  addCompanyMarker(company: Company) {}
}
