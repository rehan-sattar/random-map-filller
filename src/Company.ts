import faker from 'faker';
import { IMappable } from './CustomMap';

export class Company implements IMappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent() {
    return `
    <h1>${this.companyName}</h1>
    <h3>${this.catchPhrase}</h3>`;
  }
}
