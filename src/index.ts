import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const map = new CustomMap('map');

/**
 * @description make instances of the User and Company, each company and user will be having
 * the methods which you can use to point a location on map.
 */

map.addMarker(user);
map.addMarker(company);
