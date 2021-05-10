import styled from 'styled-components/native';

export const Form = styled.View`
  display: flex;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 4px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.main};
  padding: 5px 10px;
  height: 40px;
  width: 220px;
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
  border-radius: 6px;
  margin-bottom: 20px;
`;
