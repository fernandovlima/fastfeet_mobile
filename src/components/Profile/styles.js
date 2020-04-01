/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;
export const Content = styled.View`
  flex: 1;
  padding: 30px 30px;
  justify-content: center;
  align-items: center;
`;
export const AvatarContainer = styled.Image`
  height: 180px;
  width: 180px;
  border-radius: 90px;
  align-self: center;
`;
export const DetailsContent = styled.View`
  align-self: flex-start;
  margin-bottom: 24px;
  margin-top: 44px;
`;
export const Label = styled.Text`
  font-size: 12px;
  color: #999;
  margin-bottom: 3px;
`;
export const Detail = styled.Text`
  font-size: 22px;
  margin-bottom: 12px;
  font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 100%;
  background: #ff0000;
  padding: 12px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  align-self: center;
`;
