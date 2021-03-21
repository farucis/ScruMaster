import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import { Platform } from 'react-native';

import HomeScreen from '../screens/HomeScreen';

import Colors from '../constants/Colors';

const AppNavigator = createStackNavigator(
    {
     Home : HomeScreen
    },
    {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.white : ''
        },
            headerTintColor: Platform.OS === 'android' ? Colors.primary : Colors.primary
    }
});

export default createAppContainer(AppNavigator);