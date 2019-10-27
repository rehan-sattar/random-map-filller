import faker from 'faker';

export class User {
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
}
