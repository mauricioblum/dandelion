import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ActivityIndicator, Pressable } from 'react-native';
import firebase from 'firebase/app';
import { useObjectVal } from 'react-firebase-hooks/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Feather } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import { useAppContext } from '../../contexts/appContext';
import { NavigationProps } from '../../types';
import { Container, Title, SettingsView, SongLabel, SongCopy } from './styles';

interface HomeProps extends NavigationProps {}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { theme } = useAppContext();

  const iconColor = theme === 'dark' ? '#fff' : '#000';

  const [user, loadingAuth] = useAuthState(firebase.auth());

  const [value, loading] = useObjectVal(firebase.database().ref('currentSong'));
  console.log('🚀 ~ value', value);

  const login = async () => {
    try {
      await firebase.auth().signInAnonymously();
    } catch (err) {
      console.log('err');
    }
  };

  const logout = () => {
    firebase.auth().signOut();
  };

  useEffect(() => {
    if (!user) {
      login();
    } else {
      console.log('User is authenticated', user);
    }
  }, [user, login]);

  return (
    <Container>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <SettingsView>
        <Pressable onPress={() => navigation.navigate('Settings')}>
          <Feather color={iconColor} name="settings" size={28} />
        </Pressable>
      </SettingsView>
      <Title
        style={{
          marginBottom: 48,
        }}
      >
        Dandelion
      </Title>
      <SongLabel>Tocando agora:</SongLabel>
      {loading ? (
        <ActivityIndicator
          style={{
            marginBottom: 48,
          }}
          size="small"
          color="#9F4D5D"
        />
      ) : (
        <SongCopy
          style={{
            marginBottom: 48,
          }}
        >
          {value}
        </SongCopy>
      )}

      <Button
        title="Pedir música"
        marginVertical={10}
        onPress={() => navigation.navigate('SongRequest')}
      />

      <Button
        title="Meus pedidos"
        marginVertical={10}
        onPress={() => navigation.navigate('MySongs')}
      />
    </Container>
  );
};
