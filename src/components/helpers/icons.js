import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faCircleNotch,
  faFeatherAlt,
  faSignOutAlt,
  faTrash,
  faQuoteLeft,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
  return library.add(
    faCircleNotch,
    faFeatherAlt,
    faSignOutAlt,
    faTrash,
    faQuoteLeft,
    faQuoteRight
  );
};

export default Icons;
