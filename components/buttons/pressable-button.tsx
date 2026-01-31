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

type ButtonShape = 'default' | 'square' | 'circle' | 'star';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  testID?: string;
  shape?: ButtonShape;
  size?: number;

  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;

  hitSlop?: PressableProps['hitSlop'];
  onLongPress?: PressableProps['onLongPress'];
};

const StarShape = ({ size = 50, color = '#2196F3' }: { size: number; color: string }) => {
  return (
    <View style={[styles.starContainer, { width: size, height: size }]}>
      <View style={[styles.star, { backgroundColor: color }]} />
      <View style={[styles.starRotated, { backgroundColor: color }]} />
    </View>
  );
};

export default function PressableButton({
  title,
  onPress,
  disabled = false,
  accessibilityLabel,
  accessibilityHint,
  testID,
  shape = 'default',
  size = 50,
  containerStyle,
  buttonStyle,
  textStyle,
  hitSlop = 8,
  onLongPress,
}: Props) {
  const getShapeStyle = (pressed: boolean): ViewStyle => {
    const baseColor = disabled ? '#666666' : '#2196F3';
    const pressedOpacity = pressed && !disabled ? 0.85 : 1;
    
    switch (shape) {
      case 'square':
        return {
          width: size,
          height: size,
          backgroundColor: baseColor,
          borderRadius: 8,
          opacity: pressedOpacity,
          justifyContent: 'center',
          alignItems: 'center',
        };
      
      case 'circle':
        return {
          width: size,
          height: size,
          backgroundColor: baseColor,
          borderRadius: size / 2,
          opacity: pressedOpacity,
          justifyContent: 'center',
          alignItems: 'center',
        };
      
      case 'star':
        return {
          width: size,
          height: size,
          opacity: pressedOpacity,
          justifyContent: 'center',
          alignItems: 'center',
        };
      
      default:
        return {
          padding: 15,
          backgroundColor: baseColor,
          borderRadius: 8,
          opacity: pressedOpacity,
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 120,
        };
    }
  };

  const getTextStyle = (): TextStyle => {
    const fontSize = shape === 'circle' || shape === 'square' ? Math.max(12, size * 0.2) : 16;
    return {
      fontSize,
      fontWeight: '600',
      textAlign: 'center',
    };
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable
        testID={testID}
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={disabled}
        hitSlop={hitSlop}
        android_ripple={{ color: 'rgba(255,255,255,0.25)', borderless: shape === 'circle' }}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? title}
        accessibilityHint={accessibilityHint}
        style={({ pressed }) => [
          getShapeStyle(pressed),
          buttonStyle,
        ]}
      >
        {shape === 'star' ? (
          <View style={styles.starButtonContent}>
            <StarShape 
              size={size * 0.8} 
              color={disabled ? '#666666' : '#2196F3'} 
            />
            <Text style={[styles.starText, { color: 'white' }, textStyle]}>
              {title}
            </Text>
          </View>
        ) : (
          <Text
            style={[
              styles.text,
              getTextStyle(),
              disabled && styles.textDisabled,
              textStyle,
            ]}
          >
            {title}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
  textDisabled: {
    color: 'rgba(255,255,255,0.9)',
  },
  starContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    width: '60%',
    height: '60%',
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
  },
  starRotated: {
    width: '60%',
    height: '60%',
    transform: [{ rotate: '0deg' }],
    position: 'absolute',
  },
  starButtonContent: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starText: {
    position: 'absolute',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});