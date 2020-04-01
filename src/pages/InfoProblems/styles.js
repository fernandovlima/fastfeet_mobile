import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const ProblemsInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 300px;
  border: ${(props) =>
    props.hasFocus ? '1px solid #7159c1;' : '1px solid #ddd;'}
  border-radius: 5px;
  padding: 10px;
`;
export const SubmitProblemsButton = styled(RectButton)`
  width: 100%;
  margin-top: 15px;
  background: #7159c1;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  align-self: center;
  color: #fff;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
`;
