import { StyleSheet, ScrollView, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

// import Button from '@/components/buttons/normal-button';
import Pressable from '@/components/buttons/pressable-button';
// import TextInput from '@/components/inputs/text-input';

export default function HomeScreen() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Custom Pressable</Text>
          <Pressable title="Default" onPress={() => alert('Default!')} />
            <Pressable 
              title="Square" 
              onPress={() => alert('Square!')} 
              shape="square" 
              size={100} 
            />

            <Pressable 
              title="Circle"  
              onPress={() => alert('Circle!')} 
              shape="circle" 
              size={100} 
            />

            <Pressable 
              title="Star" 
              onPress={() => alert('Star!')} 
              shape="star" 
              size={100} 
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
    paddingLeft: 4,
  },
});