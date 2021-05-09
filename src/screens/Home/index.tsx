import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native';
import { useAppContext } from '../../contexts/appContext';
import { NavigationProps } from '../../types';
import { Container, Title } from './styles';

interface HomeProps extends NavigationProps {}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
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

      <Button
        title="Go to Status"
        onPress={() => navigation.navigate('Status')}
      />
    </Container>
  );
};
