import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
  color: #7159c1;
`;

export const Body = styled.View`
  height: 120px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background: #f8f9fd;
`;

export const Content = styled.View``;

export const Label = styled.Text`
  font-size: 8px;
  color: #bbb;
`;

export const TextInfo = styled.Text`
  font-size: 12px;
  color: #999;
  font-weight: bold;
`;

export const DetailButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const TextButton = styled.Text`
  font-size: 12px;
  color: #7159c1;
  font-weight: bold;
`;
