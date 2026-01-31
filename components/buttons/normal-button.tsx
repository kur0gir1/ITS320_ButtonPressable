import React from 'react';
import { Button, View, StyleSheet, ViewStyle, ButtonProps } from 'react-native';

type Props = {
  containerStyle?: ViewStyle;
} & Omit<ButtonProps, 'title'> & {
    title: string;
  };

export default function NormalButton({
  title,
  containerStyle,
  ...buttonProps
}: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Button title={title} {...buttonProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});