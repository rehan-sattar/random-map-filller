import faker from 'faker';
import { IMappable } from './CustomMap';
export class User implements IMappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      /**
       *
       * faker.address.longitude & faker.address.latitude returns string
       * parseFloat() converts string to number with decimals.
       */
      lat: parseFloat(faker.address.longitude()),
      lng: parseFloat(faker.address.latitude())
    };
  }

  markerContent() {
    return `<h3>${this.name}</h3>`;
  }
}
