/* eslint-disable prettier/prettier */
import Reactotron, { asyncStorage } from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.use(asyncStorage())
    .configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
