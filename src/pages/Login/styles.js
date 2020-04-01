import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #7159c1;
`;

export const Logo = styled.Image`
  margin-bottom: 30px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#888',
})`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  background: #eee;
`;

export const SubmitButton = styled(RectButton)`
  background: #fafa43;
  width: 100%;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  align-self: center;
  color: #7159c1;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
`;
