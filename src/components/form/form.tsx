import React from 'react';
import { View,TextInput,Text } from 'react-native';

import { styles } from './formStyle';

export function Form() {
  return (
    <View style={styles.formStyle}>
      <Text>Inset your name</Text>
      <TextInput
              placeholder={'Name'}
              style={[styles.textInput,styles.textName]}
              ></TextInput>
            <Text>Inset your location</Text>
      <TextInput
              placeholder={'Name'}
              style={[styles.textInput,styles.textLocation]}
              ></TextInput>
            <Text>Inset your message</Text>
      <TextInput
              placeholder={'Name'}
              style={[styles.textInput,styles.textMessage]}
              ></TextInput>
    </View>
  );
}