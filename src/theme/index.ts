import { DefaultTheme } from 'styled-components/native';

const lightTheme: DefaultTheme = {
  colors: {
    main: '#9F4D5D',
    secondary: '#4F6758',
    background: '#FFF4F0',
    text: '#3f3f3f',
    textInverted: '#fff',
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    main: '#9F4D5D',
    secondary: '#4F6758',
    background: '#282A36',
    text: '#fff',
    textInverted: '#FFF4F0',
  },
};

export { lightTheme, darkTheme };
