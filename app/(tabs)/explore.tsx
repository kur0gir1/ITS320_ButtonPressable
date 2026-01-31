import { View, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import Posts from '@/components/ui/posts'

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <View style={styles.postsContainer}>
        <Posts
          title="New title"
          description="This a new title"
          imageSource={require('@/assets/images/4.jpg')}
        >
        </Posts>
        <Posts
          title="New title"
          description="This a new title"
          imageSource={require('@/assets/images/4.jpg')}
        >
        </Posts>
        <Posts
          title="New title"
          description="This a new title"
          imageSource={require('@/assets/images/4.jpg')}
        >
        </Posts>
        <Posts
          title="New title"
          description="This a new title"
          imageSource={require('@/assets/images/4.jpg')}
        >
        </Posts>
        <Posts
          title="New title"
          description="This a new title"
          imageSource={require('@/assets/images/4.jpg')}
        >
        </Posts>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  postsContainer: {
    flex: 1,
    gap: 16,
    // padding: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
});