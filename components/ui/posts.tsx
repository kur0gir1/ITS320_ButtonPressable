import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  description: string;
  imageSource?: any;
};

export default function Posts({ title, description, imageSource }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={
          imageSource || require("@/assets/images/partial-react-logo.png")
        }
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 500,
    objectFit: 'cover',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#CCCCCC",
    lineHeight: 20,
  },
});
