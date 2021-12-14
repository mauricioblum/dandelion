import firebase from 'firebase/app';
import React, { useState, useEffect } from 'react';
import { useListVals, useObjectVal } from 'react-firebase-hooks/database';
import { Feather } from '@expo/vector-icons';

import { Alert, Pressable } from 'react-native';
import { Button } from '../../components/Button';
import { Song } from '../../types';
import { Input } from '../SongRequest/styles';

import { Container, Label, SongTitle, SongWrapper } from './styles';
import { useAppContext } from '../../contexts/appContext';

const DJLoginPassword = '@fm18122021';

const DJScreen: React.FC = () => {
  const [songs] = useListVals<Song>(firebase.database().ref('requests'), {
    keyField: 'songId',
  });
  const { theme } = useAppContext();

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
      Alert.alert(
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

  const iconColor = theme === 'dark' ? '#fff' : '#000';

  return (
    <Container>
      {authorized ? (
        <>
          <Label>Bem-vindo!</Label>
          <Label>
            Clique no Play para mostrar o pedido no painel, ou no X para remover
          </Label>

          {songs?.map((song) => (
            <SongWrapper key={song.songId}>
              <SongTitle>
                {song.name} - {song.artist}
              </SongTitle>
              <Pressable onPress={() => console.log('Make this playable')}>
                <Feather color={iconColor} name="play" size={20} />
              </Pressable>
              <Pressable onPress={() => {}}>
                <Feather color={iconColor} name="delete" size={20} />
              </Pressable>
            </SongWrapper>
          ))}
          {songs?.length === 0 && (
            <SongTitle>Nenhum pedido registrado.</SongTitle>
          )}
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
