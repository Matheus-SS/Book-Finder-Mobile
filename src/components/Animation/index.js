import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import book from '../../../book.json';

export default function Animation() {
  return (
    <LottieView
      style={{
        width: 300,
        height: 300,
        alignSelf: 'center',
      }}
      source={book}
      autoPlay
      loop
      resizeMode="contain"
      autoSize
      speed={0.5}
    />
  );
}
