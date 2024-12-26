import React, { useEffect, useState } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const [slideAnim] = useState(new Animated.Value(-500));  // Start position off-screen (slide from top)
  const [fadeAnim] = useState(new Animated.Value(0));  // For fading in (optional, can be omitted)

  useEffect(() => {
    // Slide the logo and text down from the top and fade them in
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,  // End at 0 (center of the screen)
        duration: 2000,  // Duration of 2 seconds
        useNativeDriver: true,  // For better performance
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,  // Fade to full opacity
        duration: 2000,  // Duration of 2 seconds
        useNativeDriver: true,
      }),
    ]).start();

    // Redirect to the main app screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Main');  // Ensure you use 'replace' so the user can't go back to the splash screen
    }, 5000);  // 3 seconds splash screen duration

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [slideAnim, fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      {/* Apply the animated value to slide and fade the logo */}
      <Animated.Image
        source={require('../assets/DiaTrack img.png')}  // Replace with your logo path
        style={[
          styles.logo,
          {
            transform: [{ translateY: slideAnim }],  // Apply sliding effect from top
            opacity: fadeAnim,  // Apply fading effect
          },
        ]}
      />
      <Animated.Text
        style={[
          styles.appName,
          {
            transform: [{ translateY: slideAnim }],  // Apply same sliding effect for text
            opacity: fadeAnim,  // Apply fading effect for text
          },
        ]}
      >
        DiaTrack
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aaff',  // Your splash screen background color
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,  // Add space between the logo and the text
  },
});

export default SplashScreen;
