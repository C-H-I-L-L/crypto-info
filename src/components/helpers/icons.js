import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faCircleNotch,
  faFeatherAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
  return library.add(faCircleNotch, faFeatherAlt, faSignOutAlt);
};

export default Icons;
