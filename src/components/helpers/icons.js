import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faCircleNotch,
  faFeatherAlt,
  faSignOutAlt,
  faTrash,
  faQuoteLeft,
  faQuoteRight,
  faHome,
  faNewspaper,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
  return library.add(
    faCircleNotch,
    faFeatherAlt,
    faSignOutAlt,
    faTrash,
    faQuoteLeft,
    faQuoteRight,
    faHome,
    faNewspaper,
    faMoneyBillWave
  );
};

export default Icons;
