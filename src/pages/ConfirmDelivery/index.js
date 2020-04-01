import React, { useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  CameraContent,
  CameraPosition,
  TakePhotoContent,
  TakePhotoButton,
  SubmitPhotoButton,
  Label,
} from './styles';

export default function ConfirmDelivery() {
  const isFocused = useIsFocused();
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [camera, setCamera] = useState();
  const [photo, setPhoto] = useState(null);

  const onChangePhoto = (newPhoto) => {
    setPhoto(newPhoto);
    setIsCameraVisible(false);
  };

  const onTakePicture = async () => {
    try {
      const data = await camera.takePictureAsync({
        quality: 0.5,
        forceUpOrientation: true,
        fixOrientation: true,
        skipProcessing: true,
      });
      onChangePhoto(data.uri);
      console.tron.log('URL IMAGE:', data.uri);
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao tirar a foto.');
    }
  };

  return (
    <Container>
      <CameraContent>
        <RNCamera
          ref={(ref) => setCamera(ref)}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
        />
      </CameraContent>
      <CameraPosition>
        <TakePhotoContent>
          <TakePhotoButton onPress={() => onTakePicture()}>
            <Icon name="camera" size={32} color="#fff" />
          </TakePhotoButton>
        </TakePhotoContent>
      </CameraPosition>
      <SubmitPhotoButton>
        <Label>Enviar</Label>
      </SubmitPhotoButton>
    </Container>
  );
}
