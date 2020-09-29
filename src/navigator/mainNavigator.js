import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps115646Navigator from '../features/Maps115646/navigator';
import Add-Item115645Navigator from '../features/Add-Item115645/navigator';
import Maps115641Navigator from '../features/Maps115641/navigator';
import UserProfile115637Navigator from '../features/UserProfile115637/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps115646: { screen: Maps115646Navigator },
Add-Item115645: { screen: Add-Item115645Navigator },
Maps115641: { screen: Maps115641Navigator },
UserProfile115637: { screen: UserProfile115637Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
