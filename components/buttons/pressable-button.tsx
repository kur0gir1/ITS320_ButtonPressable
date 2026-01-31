import React from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  PressableProps,
} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  testID?: string;

  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;

  hitSlop?: PressableProps['hitSlop'];
  onLongPress?: PressableProps['onLongPress'];
};

export default function PressableButton({
  title,
  onPress,
  disabled = false,
  accessibilityLabel,
  accessibilityHint,
  testID,
  containerStyle,
  buttonStyle,
  textStyle,
  hitSlop = 8,
  onLongPress,
}: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable
        testID={testID}
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={disabled}
        hitSlop={hitSlop}
        android_ripple={{ color: 'rgba(255,255,255,0.25)' }}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? title}
        accessibilityHint={accessibilityHint}
        style={({ pressed }) => [
          styles.button,
          pressed && !disabled && styles.buttonPressed,
          disabled && styles.buttonDisabled,
          buttonStyle,
        ]}
      >
        <Text
          style={[
            styles.text,
            disabled && styles.textDisabled,
            textStyle,
          ]}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  buttonPressed: {
    opacity: 0.85,
    backgroundColor: '#fff',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
  textDisabled: {
    color: 'rgba(255,255,255,0.9)',
  },
});