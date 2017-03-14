import { TabNavigator } from 'react-navigation';

import Discover from './discover.pages';
import Information from './information.pages';
import Me from './me.pages';

const lvquan = TabNavigator({
  Discover: {
    screen: Discover
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

module.exports = lvquan
