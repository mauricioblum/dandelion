import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import firebase from 'firebase/app';
import React, { useEffect, useState } from 'react';
import { useListVals } from 'react-firebase-hooks/database';
import { FlatList, Platform, Pressable } from 'react-native';
import { Button } from '../../components/Button';
import { alertMessage } from '../../services/alertService';
import { NavigationProps, Song } from '../../types';
import { Input } from '../SongRequest/styles';
import {
  ActionsView,
  Container,
  Label,
  SongTitle,
  SongWrapper,
} from './styles';

const DJLoginPassword = '@fm18122021';

interface DJScreenProps extends NavigationProps {}

const DJScreen: React.FC<DJScreenProps> = ({ navigation }) => {
  const [songs] = useListVals<Song>(firebase.database().ref('requests'), {
    keyField: 'songId',
  });

  const [input, setInput] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState(false);

  const login = async () => {
    setError(false);
    try {
      if (input === DJLoginPassword) {
        setAuthorized(true);
      } else {
        throw new Error('Senha incorreta');
      }
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  useEffect(() => {
    if (error) {
      alertMessage(
        'Senha incorreta',
        'Tente novamente',
        [
          {
            text: 'OK',
            onPress: () => {
              setInput('');
            },
          },
        ],
        { cancelable: true },
      );
    }
  }, [error]);

  const handlePlaySong = (song: Song) => {
    const requestsRef = firebase.database().ref(`requests`);
    const currentSongRef = firebase.database().ref(`currentSong`);

    currentSongRef.set(`${song.name} - ${song.artist}`, (currSongError) => {
      if (currSongError) {
        alertMessage('Erro ao tocar música atual, tente novamente');
      } else {
        requestsRef.child(song.songId).remove();
      }
    });
  };

  const handleRemoveSong = (song: Song) => {
    const requestsRef = firebase.database().ref(`requests`);

    requestsRef.child(song.songId).remove();
  };

  const handleSearchSong = (song: Song) => {
    const url = `https://open.spotify.com/search/${encodeURI(
      `${song.name} ${song.artist}`,
    )}`;
    if (Platform.OS === 'web') {
      // eslint-disable-next-line no-undef
      window.open(url, 'spotifywindow');
    } else {
      Linking.openURL(url);
    }
  };

  return (
    <Container>
      {authorized ? (
        <>
          <Label>Bem-vindo!</Label>
          <Label>
            Clique no Play para mostrar o pedido no painel, ou no X para remover
          </Label>

          <FlatList
            data={songs}
            style={{ marginTop: 20, width: '100%' }}
            ListEmptyComponent={
              <SongTitle>Nenhum pedido registrado.</SongTitle>
            }
            keyExtractor={(song) => song.songId}
            renderItem={({ item: song }) => (
              <SongWrapper>
                <SongTitle>
                  {song.name} - {song.artist}
                </SongTitle>
                <ActionsView>
                  <Pressable
                    style={{ marginRight: 14 }}
                    onPress={() => handlePlaySong(song)}
                  >
                    <FontAwesome color="#b305ca" name="play-circle" size={40} />
                  </Pressable>
                  <Pressable
                    style={{ marginRight: 14 }}
                    onPress={() => handleSearchSong(song)}
                  >
                    <FontAwesome color="#057738" name="spotify" size={40} />
                  </Pressable>
                  <Pressable onPress={() => handleRemoveSong(song)}>
                    <FontAwesome color="#b90505" name="trash" size={40} />
                  </Pressable>
                </ActionsView>
              </SongWrapper>
            )}
          />

          <Button
            title="Sair"
            marginVertical={4}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </>
      ) : (
        <>
          <Label>Digite a senha para liberar acesso de DJ.</Label>
          <Input
            onChangeText={(text) => setInput(text)}
            autoCorrect={false}
            value={input}
            returnKeyType="default"
            onSubmitEditing={() => {
              login();
            }}
          />
          <Button title="Validar" marginVertical={4} onPress={login} />
        </>
      )}
    </Container>
  );
};

export default DJScreen;
