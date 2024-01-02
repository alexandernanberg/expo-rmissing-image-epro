import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <Image style={styles.image} source={require("../../assets/image.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Inter-SemiBold",
  },
  image: {
    width: 100,
    height: 100,
  },
});
