import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../constants/styles';

type Props = {
  onPress: () => (void),
  title: string
}

const Button: React.FC<Props> = ({ onPress, title }): JSX.Element => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Button;
