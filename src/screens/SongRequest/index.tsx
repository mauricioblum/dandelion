import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container } from '../../theme/components';
import { Button } from '../../components/Button';
import { Form, Label, Input } from './styles';

export const SongRequest: React.FC = () => {
  const [name, setName] = useState('');
  const [artist, setArtist] = useState('');
  const artistInputRef = useRef<any>(null);
  const [user] = useAuthState(firebase.auth());

  const handleRequestSong = () => {
    if (name === '') {
      Alert.alert('Escreva pelo menos o nome da música!!!');
      return;
    }

    if (!user) {
      Alert.alert('Usuário não autenticado!');
      return;
    }

    const song = {
      name,
      artist,
      isPlaying: false,
      userId: user.uid,
    };

    const requestsRef = firebase.database().ref(`requests`);

    requestsRef.push(song, (error) => {
      if (error) {
        Alert.alert('Erro ao salvar seu pedido, tente novamente');
      } else {
        setName('');
        setArtist('');
        Alert.alert(
          'Pedido efetuado com sucesso',
          'O DJ já recebeu o seu pedido',
          [
            {
              text: 'OK',
              onPress: () => {},
            },
          ],
          { cancelable: false },
        );
      }
    });
  };

  return (
    <Container>
      <Form>
        <Label>Nome da música</Label>
        <Input
          onChangeText={(text) => setName(text)}
          autoCapitalize="words"
          autoCorrect={false}
          value={name}
          returnKeyType="next"
          onEndEditing={() => {
            if (artistInputRef.current) {
              artistInputRef.current.focus();
            }
          }}
        />
        <Label>Artista / Banda</Label>
        <Input
          ref={artistInputRef}
          onChangeText={(text) => setArtist(text)}
          autoCapitalize="words"
          autoCorrect={false}
          value={artist}
          returnKeyType="send"
          onEndEditing={handleRequestSong}
        />
        <Button title="Pedir" marginVertical={10} onPress={handleRequestSong} />
      </Form>
    </Container>
  );
};
