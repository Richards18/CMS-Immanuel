import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../Redux/Store';
import { AuthProvider } from '../Redux/AuthProviders';
import { SCREENS } from '../Constants/ScreenNames';
import SplashScreen from '../Screens/Viewer/Splash/SplashScreen';
import HomeController from '../Screens/Controller/Home/HomeController';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomMenuBar from './CustomMenuBar';
import PrayReqController from '../Screens/Controller/PrayRequest/PrayReqController';
import OurChurchController from '../Screens/Controller/OurChurch/OurChurchController';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.SPLASH_SCREEN}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={SCREENS.HOME_SCREEN} component={HomeController} />
      <Stack.Screen name={SCREENS.PRAY_REQUEST} component={PrayReqController} />
      <Stack.Screen name={SCREENS.OUR_CHURCH} component={OurChurchController} />
    </Stack.Navigator>
  );
};

const AppRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <AuthProvider>
          <Drawer.Navigator
            drawerContent={props => <CustomMenuBar {...props} />}

            screenOptions={{
              headerShown: false,
              drawerPosition: 'right',
              drawerType: 'front',
              overlayColor: 'rgba(0,0,0,0.5)',
              drawerStyle: {
                width: '70%',
                backgroundColor: '#fff',
              },
            }}>
            <Drawer.Screen name="MainApp" component={MainStack} />
          </Drawer.Navigator>

        </AuthProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
};

export default AppRouter;
