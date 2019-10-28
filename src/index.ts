import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
console.log('TCL: user', user);

const company = new Company();
console.log('TCL: company', company);

const map = new CustomMap('map');
map.addUserMarker(user);
console.log(map);
