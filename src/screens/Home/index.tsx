import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, Pressable, Image } from 'react-native';
import firebase from 'firebase/app';
import { useObjectVal } from 'react-firebase-hooks/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Feather } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import { useAppContext } from '../../contexts/appContext';
import { NavigationProps } from '../../types';
import { Container, SettingsView, SongLabel, SongCopy } from './styles';
import monogram from '../../../assets/monograma-logo.png';

interface HomeProps extends NavigationProps {}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { theme } = useAppContext();

  const iconColor = theme === 'dark' ? '#fff' : '#000';

  const [user] = useAuthState(firebase.auth());

  const [value, loading] = useObjectVal(firebase.database().ref('currentSong'));

  if (!user) {
    return null;
  }

  return (
    <Container>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <SettingsView>
        <Pressable onPress={() => navigation.navigate('Settings')}>
          <Feather color={iconColor} name="settings" size={28} />
        </Pressable>
      </SettingsView>
      <Image source={monogram} style={{ width: 200, height: 200 }} />
      <SongLabel>Tocando agora:</SongLabel>
      {loading ? (
        <ActivityIndicator
          style={{
            marginBottom: 48,
          }}
          size="large"
          color="#4F6758"
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
