import React from 'react';
import { Pressable } from 'react-native';
import firebase from 'firebase/app';
import { useListVals } from 'react-firebase-hooks/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Feather } from '@expo/vector-icons';
import { Container } from '../../theme/components';
import { SongTitle, SongWrapper } from './styles';
import { Song } from '../../types';

export const MySongs: React.FC = () => {
  const [songs] = useListVals<Song>(firebase.database().ref('requests'), {
    keyField: 'songId',
  });

  const [user] = useAuthState(firebase.auth());

  const handleDeleteSong = (songId: string) => {
    try {
      firebase.database().ref(`requests/${songId}`).remove();
    } catch (err) {
      console.log('error removing song', err);
    }
  };

  if (!user || !songs) {
    return null;
  }

  const userSongs = songs.filter((song) => song.userId === user.uid);

  return (
    <Container>
      {userSongs?.map((song) => (
        <SongWrapper key={song.songId}>
          <SongTitle>
            {song.name} - {song.artist}
          </SongTitle>
          <Pressable onPress={() => handleDeleteSong(song.songId)}>
            <Feather name="trash-2" size={20} />
          </Pressable>
        </SongWrapper>
      ))}
      {userSongs.length === 0 && (
        <SongTitle>Você ainda não fez nenhum pedido.</SongTitle>
      )}
    </Container>
  );
};
