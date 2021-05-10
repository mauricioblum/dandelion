import React from 'react';
import { StyledButton, ButtonText } from './styles';

interface ButtonProps {
  onPress: () => void;
  title?: string;
  marginVertical?: number;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { onPress, title = 'Save', marginVertical } = props;
  return (
    <StyledButton
      onPress={onPress}
      style={{
        marginVertical,
      }}
    >
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
};
