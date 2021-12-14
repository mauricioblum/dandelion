import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 4px;
`;

export const SongWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 250px;
`;

export const SongTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.main};
  margin-right: 16px;
`;
