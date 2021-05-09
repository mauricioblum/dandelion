import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native';
import { useAppContext } from '../../contexts/appContext';

import { Container, Title } from './styles';

export const Home: React.FC = () => {
  const { theme, setTheme } = useAppContext();

  return (
    <Container>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <Title>Home</Title>
      <Title>{theme}</Title>
      <Button
        title="Toggle Theme"
        onPress={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      />
    </Container>
  );
};
