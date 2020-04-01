import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const CameraContent = styled.View`
  background: #beafec;
  height: 400px;
  border-radius: 8px;
`;

export const CameraPosition = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TakePhotoContent = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #7159c1;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-top: -40px;
`;

export const TakePhotoButton = styled.TouchableOpacity``;

export const SubmitPhotoButton = styled(RectButton)`
  width: 100%;
  margin-top: 15px;
  background: #7159c1;
  border-radius: 5px;
`;

export const Label = styled.Text`
  align-self: center;
  color: #fff;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
`;
