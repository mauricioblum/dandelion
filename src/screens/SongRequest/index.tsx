import React, { useState, useRef } from 'react';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container } from '../../theme/components';
import { Button } from '../../components/Button';
import { Form, Label, Input } from './styles';
import { alertMessage } from '../../services/alertService';

export const SongRequest: React.FC = () => {
  const [name, setName] = useState('');
  const [artist, setArtist] = useState('');
  const artistInputRef = useRef<any>(null);
  const [user] = useAuthState(firebase.auth());

  const handleRequestSong = () => {
    if (name === '') {
      alertMessage('Escreva pelo menos o nome da música!!!');
      return;
    }

    if (!user) {
      alertMessage('Usuário não autenticado!');
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
        alertMessage('Erro ao salvar seu pedido, tente novamente');
      } else {
        setName('');
        setArtist('');
        alertMessage(
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
