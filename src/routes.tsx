import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './theme';

import { Home } from './screens/Home';
import { Status } from './screens/Status';
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
      background: '#f4f4f4',
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
            headerTitleStyle: {
              color: getHeaderColors().text,
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
            name="Status"
            component={Status}
            options={{
              title: 'Status',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
