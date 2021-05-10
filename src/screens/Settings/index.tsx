import React from 'react';
import { Button } from '../../components/Button';
import { useAppContext } from '../../contexts/appContext';
import { Container } from '../../theme/components';

export const Settings: React.FC = () => {
  const { theme, setTheme } = useAppContext();

  return (
    <Container>
      <Button
        title="Mudar Tema"
        onPress={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      />
    </Container>
  );
};
