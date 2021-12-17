import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../theme/components';
import { NavigationProps } from '../../types';

interface SettingsProps extends NavigationProps {}

export const Settings: React.FC<SettingsProps> = ({ navigation }) => {
  const [isDJ, setIsDJ] = useState(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsDJ(false);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
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
