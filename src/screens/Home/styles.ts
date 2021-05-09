import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => {
    return props.theme.colors.background;
  }};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${(props) => {
    return props.theme.colors.text;
  }};
`;
