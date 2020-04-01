import React, { useState } from 'react';
import { Alert } from 'react-native';

import {
  Container,
  ProblemsInput,
  SubmitProblemsButton,
  ButtonText,
} from './styles';

export default function InfoProblems() {
  const [hasFocus, setHasFocus] = useState(false);

  function SubmitProblems() {
    Alert.alert(
      'Confimação',
      'Problema enviado com sucesso.',
      [{ text: 'OK', onPress: () => {} }],
      { cancelable: false }
    );
  }
  return (
    <Container>
      <ProblemsInput
        placeholder="inclua aqui o problema que ocorreu durante a entrega."
        numberOfLines={10}
        onChangeText={() => setHasFocus(true)}
        hasFocus={hasFocus}
        multiline
      />
      <SubmitProblemsButton onPress={SubmitProblems}>
        <ButtonText>Enviar</ButtonText>
      </SubmitProblemsButton>
    </Container>
  );
}
