import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';

import { Container, Button, Label } from './styles';

export default function DeliveryButton({ name, color, size, label, page }) {
  const navigation = useNavigation();

  function navigateTo() {
    navigation.navigate(page);
  }
  return (
    <Container>
      <Button onPress={navigateTo}>
        <Icon name={name} color={color} size={size} />
        <Label>{label}</Label>
      </Button>
    </Container>
  );
}
