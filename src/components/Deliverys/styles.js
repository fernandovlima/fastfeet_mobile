import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 80px 30px;
  background: #fff;
`;

export const DeliverymanContent = styled.View`
  height: 10%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  margin-right: 14px;
`;
export const TextContent = styled.View`
  width: 60%;
`;

export const WelcomeMessage = styled.Text`
  font-size: 14px;
  color: #999;
`;
export const DeliverymanName = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
export const LogoutButton = styled.TouchableOpacity``;

export const TopActions = styled.View`
  flex-direction: row;
  margin-top: 32px;
  align-items: center;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-right: 15%;
  margin-bottom: 12px;
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const PendButton = styled.TouchableOpacity`
  margin-right: 14px;
`;

export const DeliveredButton = styled.TouchableOpacity``;

export const TextButton = styled.Text``;

export const ListContent = styled.View`
  margin: -20px;
`;

export const List = styled.ScrollView``;
