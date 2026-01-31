import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import React from 'react';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedView } from '@/components/themed-view';
import  Button  from '@/components/buttons/normal-button';
import Pressable from '@/components/buttons/pressable-button';
import TextInput from '@/components/inputs/text-input';

export default function HomeScreen() {
  const [text, setText] = React.useState('');
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={{ padding: 16, gap: 16 }}>
        <Button title='Normal Button' onPress={() => alert('normal button pressed!')} />
        <Pressable title='Pressable Button' onPress={() => alert('pressable button pressed!')} />
        <TextInput   title="Enter text"
          placeholder="Type here..."
          value={text}
          onChangeText={setText} />
        <Pressable title='Submit Message' onPress={() => {
            alert('Message Sent!');
            setText('');
        }} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
