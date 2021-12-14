import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { useAppContext } from '../../contexts/appContext';
import { Container } from '../../theme/components';
import { NavigationProps } from '../../types';

interface SettingsProps extends NavigationProps {}

export const Settings: React.FC<SettingsProps> = ({ navigation }) => {
  const { theme, setTheme } = useAppContext();
  const [isDJ, setIsDJ] = useState(false);

  return (
    <Container>
      <Button
        title="Mudar Tema"
        onPress={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      />

      {isDJ ? (
        <Button
          title="Desvincular DJ"
          onPress={() => {
            setIsDJ(false);
          }}
        />
      ) : (
        <Button
          title="Sou DJ"
          marginVertical={8}
          onPress={() => {
            setIsDJ(true);
            navigation.navigate('DJScreen');
          }}
        />
      )}
    </Container>
  );
};
