import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme, darkTheme } from './theme';

import { Home } from './screens/Home';
import { SongRequest } from './screens/SongRequest';
import { Settings } from './screens/Settings';
import { MySongs } from './screens/MySongs';
import { useAppContext } from './contexts/appContext';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  const { theme } = useAppContext();

  const getHeaderColors = () => {
    if (theme === 'dark') {
      return {
        background: '#282A36',
        text: '#fff',
      };
    }
    return {
      background: '#FFF4F0',
      text: '#333',
    };
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: getHeaderColors().background,
            },
            headerTintColor: getHeaderColors().text,
            headerTitleStyle: {
              color: getHeaderColors().text,
            },
            headerBackTitleStyle: {
              backgroundColor: getHeaderColors().background,
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Dandelion',
            }}
          />
          <Stack.Screen
            name="SongRequest"
            component={SongRequest}
            options={{
              title: 'SongRequest',
            }}
          />
          <Stack.Screen
            name="MySongs"
            component={MySongs}
            options={{
              title: 'Meus pedidos',
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              title: 'Settings',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
