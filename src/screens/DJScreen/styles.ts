import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Label = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 4px;
  text-align: center;
`;

export const SongWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  padding: 12px 8px;
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 6px;
  margin-bottom: 6px;
  background: #fff;
`;

export const ActionsView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SongTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.main};
  margin-right: 16px;
  max-width: 55%;
`;
