import { TabNavigator, StackNavigator } from 'react-navigation';

import Discover from './discover.pages';
import Choiceness from './discover.pages/choiceness';
import DiscoverDetail from './discover.pages/detail';

import Trip from './trip.pages';
import Information from './information.pages';
import Me from './me.pages';

const MainScreenNavigator = TabNavigator({
  Discover: {
    screen: Discover
  },
  Trip: {
    screen: Trip
  },
  Information: {
    screen: Information,
  },
  Me: {
    screen: Me,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
});

const lvquan = StackNavigator(
  {
    Home: { screen: MainScreenNavigator },
    DiscoverDetail: { screen: DiscoverDetail },
    Choiceness: { screen: Choiceness },
  }, {
    headerMode: 'screen'
  }
);

module.exports = lvquan
