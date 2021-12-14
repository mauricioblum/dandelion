import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  SongRequest: undefined;
  Settings: undefined;
  MySongs: undefined;
  DJScreen: undefined;
};

export type NavigationProps = StackScreenProps<RootStackParamList, 'Home'>;

export interface Song {
  name: string;
  artist: string;
  isPlaying: boolean;
  userId: string;
  songId: string;
}
