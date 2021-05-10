import styled from 'styled-components/native';

export const StyledButton = styled.Pressable.attrs({
  elevation: 3,
})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 6px;
  min-width: 180px;
  background-color: ${(props) => props.theme.colors.main};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textInverted};
`;
