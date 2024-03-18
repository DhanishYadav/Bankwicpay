import { View, Text, StyleSheet, Image, PermissionsAndroid, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Snackbar } from 'react-native-paper';
const PanImageScreen = () => {
  const navigation = useNavigation();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [snackBarText, setSnackBarText] = useState('');
  const [visibleSnackBar, setVisibleSnackBar] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const onShowSnackBar = () => setVisibleSnackBar(true);
  const onDismissSnackBar = () => setVisibleSnackBar(false);
  const FormValidate = () => {
    if (selectedPhoto === null || selectedPhoto === '') {
      setSnackBarText('Please Click/Choose Photo');
      setVisibleSnackBar(true);
    }
    else {
      navigation.navigate("AdharScreen")
      setSelectedPhoto("")
    }
  };
  const options = {
    saveToPhotos: true,
    mediaType: "photo",
  };
  const OpenCamera = async () => {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setSelectedPhoto(result.assets[0].uri);
    }
  }
  const gallery = async () => {
    const result = await launchImageLibrary(options);
    setSelectedPhoto(result.assets[0].uri);
  }
  if (isloading) {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <ActivityIndicator size="40" color={Colors.accent} />
          <Text style={{ color: '#000', marginTop: 30, fontSize: 16, fontWeight: "bold" }}>Please wait while we process your request...</Text>
        </View>
      </View>);
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.container1}>
        </View>
        <View style={styles.triangleChild}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center', borderRadius: 40
            }}>
            <Image
              style={{
                width: 120, height: 110,
                resizeMode: 'contain', borderRadius: 10
              }}
              source={require('../../../assert/appicon.png')} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.label}>Upload Pan Card Image</Text>
            <Text style={styles.label}>4/9</Text>
          </View>
          {selectedPhoto == null || selectedPhoto == "" ? <View style={styles.cardStyle}>
            <Image source={require('../../../assert/aadhar.jpeg')} style={{
              width: "97%", resizeMode: "contain",
              height: 100, borderRadius: 10,
            }} />
          </View> : <View style={styles.cardStyle}>
            <Image source={{ uri: selectedPhoto }} style={{
              width: "97%", resizeMode: "contain",
              height: 130, borderRadius: 10,
            }} />
          </View>}
          {selectedPhoto == null || selectedPhoto == "" ?
            <View style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center", marginTop: 0 }}>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={gallery}>
                  <Image
                    source={require('../../../assert/gallery.png')}  // Replace 
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <Text style={styles.labelMedia}>Gallery</Text>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={OpenCamera}>
                  <EvilIcons name="camera" size={76} color="black" />
                </TouchableOpacity>
                <Text style={styles.labelMedia}>Camera</Text>
              </View>
            </View> : null}
          <View style={{ flexDirection: "row", marginTop: 50 }}>
            <View
              style={styles.submitStyle}>
              <TouchableOpacity onPress={FormValidate}>
                <Text style={{ color: "white", fontSize: 18, fontWeight: "800" }}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Snackbar
        visible={visibleSnackBar}
        onDismiss={onDismissSnackBar}
        style={styles.snackBar}
        action={{
          label: 'Dismiss',
          onPress: () => {
            onDismissSnackBar();
          },
        }}>
        {snackBarText}
      </Snackbar>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  container1: {
    flex: 1,
    backgroundColor: "#e58142",
    borderTopWidth: 0,
    borderBottomWidth: 770,
    borderLeftWidth: 390,
    borderRightColor: 'white',
    borderBottomColor: 'white',
    borderLeftColor: 'transparent',
  },
  triangleChild: {
    height: '62%',
    width: '80%',
    backgroundColor: 'white',
    position: 'absolute',
    top: 160,
    left: 40,
    borderRadius: 10,
    elevation: 20, // Elevation is used for Android shadow
  },
  label: {
    fontWeight: '800',
    fontSize: 17,
    color: '#e58142',
    marginVertical: 5,
    marginHorizontal: 10
  },
  snackBar: {
    backgroundColor: '#003990',
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    color: 'gray',
    marginVertical: 10
  },
  submitStyle: {
    margin: 10,
    backgroundColor: '#e58142',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: "90%",
    height: 45
  },
  cardStyle: {
    width: "100%",
    height: 100,
    marginHorizontal: 4,
  },
  iconContainer: {
    alignItems: 'center',
    margin: 10
  },
  icon: {
    width: 60, // Set the width and height according to your image dimensions
    height: 60,
  },
  labelMedia: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 17,
  },

})
export default PanImageScreen