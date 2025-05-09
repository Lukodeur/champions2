// app/index.tsx
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  const handleVideoStatusUpdate = (status: AVPlaybackStatus) => {
    if (!status.isLoaded) return;
    if (status.didJustFinish) {
      router.replace("./map"); // ✅ Redirection vers app/map.tsx
    }
  };

  return (
    <View style={styles.container}>
      <Video
        source={require("../assets/videos/splash1.mp4")}
        style={styles.video}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping={false}
        onPlaybackStatusUpdate={handleVideoStatusUpdate}
      />
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  video: {
    width: width,
    height: height,
  },
});
