import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faCircleNotch,
  faFeatherAlt,
  faSignOutAlt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
  return library.add(faCircleNotch, faFeatherAlt, faSignOutAlt, faTrash);
};

export default Icons;
