import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
`;

export const SongLabel = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
`;

export const SongCopy = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.main};
`;

export const SettingsView = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
`;
