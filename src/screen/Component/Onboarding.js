import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
     const rotation = useRef(new Animated.Value(0)).current;
     useEffect(() => {
          const rotateImage = () => {
               Animated.timing(rotation, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: false,
               }).start(() => {
                    rotation.setValue(0);
               });
          };
          const rotationInterval = setInterval(() => {
               rotateImage();
          }, 3000);

          const stopRotation = () => {
               clearInterval(rotationInterval);
          };

          const navigateAfterTenSeconds = () => {
               setTimeout(() => {
                    if (navigation.isFocused()) {
                         const code = AsyncStorage.getItem('EmployeeName');
                         if (code == null || code == undefined) {
                              navigation.replace('LoginTesting');
                         } else {
                              navigation.replace('Drawernab');
                         }
                    }
               }, 3000);
          };
          rotateImage();
          navigateAfterTenSeconds();
          return () => {
               stopRotation();
          };
     }, [navigation, rotation]);

     const interpolatedRotate = rotation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
     });

     const animatedStyle = {
          transform: [{ rotate: interpolatedRotate }],
     };
     return (
          <View style={styles.container}>
               <Animated.Image
                    source={require('../../assert/kwic.png')}
                    style={[styles.image, animatedStyle]}
               />
          </View>
     ); 
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'white',
     },
     image: {
          width: 300,
          height: 200,
          alignSelf: 'center',
     },
});

export default OnboardingScreen;
