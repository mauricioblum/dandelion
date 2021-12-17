import React from 'react';
import { Pressable, FlatList } from 'react-native';
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
      <FlatList
        data={userSongs}
        keyExtractor={(song) => song.songId}
        style={{ marginTop: 10, width: '100%' }}
        ListEmptyComponent={
          <SongTitle>Você ainda não fez nenhum pedido.</SongTitle>
        }
        renderItem={({ item: song }) => (
          <SongWrapper>
            <SongTitle>
              {song.name} - {song.artist}
            </SongTitle>
            <Pressable onPress={() => handleDeleteSong(song.songId)}>
              <Feather name="trash-2" size={20} />
            </Pressable>
          </SongWrapper>
        )}
      />
    </Container>
  );
};
