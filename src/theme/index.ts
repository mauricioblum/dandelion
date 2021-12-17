import { DefaultTheme } from 'styled-components/native';

const lightTheme: DefaultTheme = {
  colors: {
    main: '#4F6758',
    secondary: '#9F4D5D',
    background: '#FFF4F0',
    text: '#3f3f3f',
    textInverted: '#fff',
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    main: '#4F6758',
    secondary: '#9F4D5D',
    background: '#282A36',
    text: '#fff',
    textInverted: '#FFF4F0',
  },
};

export { lightTheme, darkTheme };
