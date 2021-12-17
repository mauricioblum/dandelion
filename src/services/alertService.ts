/* eslint-disable no-undef */
/* eslint-disable no-alert */
import { Alert, Platform } from 'react-native';

export function alertMessage(
  title: string,
  message?: string,
  buttons?: any,
  options?: any,
) {
  if (Platform.OS === 'web') {
    if (message) {
      alert(`${title}\n${message}`);
    } else {
      alert(title);
    }
  } else {
    Alert.alert(title, message, buttons, options);
  }
}
