/* eslint-disable no-unused-vars */
import * as React from 'react';

export type Theme = 'light' | 'dark';
export interface AppContextProps {
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

export const AppContext = React.createContext<AppContextProps>(
  {} as AppContextProps,
);
export const useAppContext = () => {
  return React.useContext(AppContext);
};

const AppProvider: React.FC = ({ children, ...rest }) => {
  const [mode, setMode] = React.useState<Theme>('light');

  const setTheme = (theme: Theme) => {
    setMode(theme);
  };

  return (
    <AppContext.Provider value={{ ...rest, theme: mode, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
