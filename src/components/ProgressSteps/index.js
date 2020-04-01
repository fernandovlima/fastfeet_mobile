import React from 'react';
import { View, Text } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

// import { Container } from './styles';

export default function Steps() {
  const progressStepsStyle = {
    activeStepIconBorderColor: '#7159c1',
    activeLabelColor: '#7159c1',
    activeStepNumColor: 'white',
    activeStepIconColor: '#7159c1',
    completedStepIconColor: '#7159c1',
    completedProgressBarColor: '#7159c1',
    completedCheckColor: '#4bb543',
  };
  return (
    <ProgressSteps {...progressStepsStyle}>
      <ProgressStep label="aguardando retirada" />
      <ProgressStep label="retirada" />
      <ProgressStep label="entregue" />
    </ProgressSteps>
  );
}
