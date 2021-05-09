import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Status: undefined;
};

export type NavigationProps = StackScreenProps<RootStackParamList, 'Home'>;
