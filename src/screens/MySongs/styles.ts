import styled from 'styled-components/native';

export const SongWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 250px;
  width: 100%;
  overflow: hidden;
  padding: 12px 8px;
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 6px;
  margin-bottom: 6px;
  background: #fff;
`;

export const SongTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.main};
  margin-right: 16px;
  max-width: 85%;
`;
