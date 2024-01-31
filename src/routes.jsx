import React from 'react';

import { Icon } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import dashboard from './assets/icons/dashboard.svg';
import map from './assets/icons/map.svg';
import bike from './assets/icons/bike.svg';
import inventory from './assets/icons/inventory.svg';
import settings from './assets/icons/settings.svg';
import scanner from './assets/icons/scanner.svg';

// Admin Imports
// import MainDashboard from "./views/admin/default";
import DashboardPage from './pages/dashboard/Dashboard.page';
import RentalPage from './pages/rental/Rental.page';
import InventoryPage from './pages/InventoryPages/Inventory.page';
import NFTMarketplace from './views/admin/marketplace';
import Profile from './views/admin/profile';
import DataTables from './views/admin/dataTables';
import RTL from './views/admin/rtl';

// Auth Imports
import SignInCentered from './views/auth/signIn';

const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/dashboard',
    icon: <Image src={dashboard} alt="Dashboard Icon" boxSize="20px" />,
    component: <DashboardPage />,
  },
  {
    name: 'Mappe',
    layout: '/admin',
    path: '/map',
    icon: <Image src={map} alt="Dashboard Icon" boxSize="20px" color="white" />,
    component: <Profile />,
    // secondary: true,
  },
  {
    name: 'Noleggio',
    layout: '/admin',
    icon: (
      <Image src={bike} alt="Dashboard Icon" boxSize="20px" color="white" />
    ),
    path: '/rental',
    component: <RentalPage />,
  },
  {
    name: 'Inventario',
    layout: '/admin',
    icon: (
      <Image
        src={inventory}
        alt="Dashboard Icon"
        boxSize="20px"
        color="white"
      />
    ),
    path: '/inventory',
    component: <InventoryPage />,
  },
  {
    name: 'Settings',
    layout: '/admin',
    icon: (
      <Image src={settings} alt="Dashboard Icon" boxSize="20px" color="white" />
    ),
    path: '/settings',
    component: <DashboardPage />,
  },
  {
    name: 'Scanner',
    layout: '/admin',
    icon: (
      <Image src={scanner} alt="Dashboard Icon" boxSize="20px" color="white" />
    ),
    path: '/scanner',
    component: <DashboardPage />,
  },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  //   component: <Profile />,
  // },
];

export default routes;
