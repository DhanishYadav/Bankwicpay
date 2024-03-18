import { View, Text, StyleSheet, Image, PermissionsAndroid, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Snackbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const AdharImageScreen = () => {
     const navigation = useNavigation();
     const [selectedPhoto, setSelectedPhoto] = useState(null);
     const [selectedGallery, setSelectedGallery] = useState(null);
     const [snackBarText, setSnackBarText] = useState('');
     const [visibleSnackBar, setVisibleSnackBar] = useState(false);
     const onShowSnackBar = () => setVisibleSnackBar(true);
     const onDismissSnackBar = () => setVisibleSnackBar(false);

     const FormValidateFront = () => {
          if (selectedPhoto === null || selectedPhoto === '') {
               setSnackBarText('Please Click/Choose Aadhar Front Photo');
               setVisibleSnackBar(true);
          }
          else if (selectedGallery === null || selectedGallery === '') {
               setSnackBarText('Please Click/Choose Aadhar Back Photo');
               setVisibleSnackBar(true);
          }
          else {
               setSelectedPhoto("")
               setSelectedGallery("")
               navigation.navigate("SignUpDetails")

          }
     };

     // const FormValidateBack = () => {
     //      if (selectedGallery === null || selectedGallery === '') {
     //           setSnackBarText('Please Click/Choose Aadhar Back Photo');
     //           setVisibleSnackBar(true);
     //      }
     //      else if (selectedPhoto === null || selectedPhoto === '') {
     //           setSnackBarText('Please Click/Choose Aadhar Front Photo');
     //           setVisibleSnackBar(true);
     //      }
     //      else {
     //           navigation.navigate("SignupDetails")
     //           setSelectedGallery("")
     //      }
     // };
     // const Submit = () => {
     //      navigation.navigate("SignupDetails")
     //      setSelectedPhoto("")
     //      setSelectedGallery("")
     // }
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
     const OpenCameraBack = async () => {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
               const result = await launchCamera(options);
               setSelectedGallery(result.assets[0].uri);
          }
     }
     const galleryBack = async () => {
          const result = await launchImageLibrary(options);
          setSelectedGallery(result.assets[0].uri);
     }
     return (
          <SafeAreaProvider>
               <View style={styles.container}>
                    <View style={styles.container1}>
                    </View>
                    <View style={styles.triangleChild}>
                         <ScrollView showsHorizontalScrollIndicator={false}>
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
                                   <Text style={styles.label}>Upload Front Page of Aadhar Card</Text>
                                   <Text style={styles.label}>7/9</Text>
                              </View>
                              {selectedPhoto == null || selectedPhoto == "" ?
                                   <View style={styles.cardStyle}>
                                        <Image source={require('../../../assert/adharBack.png')} style={{
                                             width: "97%", resizeMode: "contain",
                                             height: 100, borderRadius: 10,
                                        }} />
                                   </View> : <View style={styles.cardStyle}>
                                        <Image source={{ uri: selectedPhoto }} style={{
                                             width: "97%", resizeMode: "contain",
                                             height: 120, borderRadius: 10,
                                        }} />
                                   </View>}
                              {selectedPhoto == null || selectedPhoto == "" ?
                                   <View style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center", marginTop: 10 }}>
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
                              <View style={{ flexDirection: "row", marginTop: 40 }}>
                                   <View
                                        style={styles.submitStyle}>
                                        <TouchableOpacity onPress={FormValidateFront}>
                                             <Text style={{ color: "white", fontSize: 18, fontWeight: "800" }}>SUBMIT</Text>
                                        </TouchableOpacity>
                                   </View>
                              </View>
                              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                   <Text style={styles.label}>Upload Back Page of Aadhar Card</Text>
                              </View>
                              {selectedGallery == null || selectedGallery == "" ?
                                   <View style={styles.cardStyle}>
                                        <Image source={require('../../../assert/adharBack.png')} style={{
                                             width: "97%", resizeMode: "contain",
                                             height: 140, borderRadius: 10,
                                        }} />
                                   </View> : <View style={styles.cardStyle}>
                                        <Image source={{ uri: selectedGallery }} style={{
                                             width: "97%", resizeMode: "contain",
                                             height: 100, borderRadius: 10,
                                        }} />
                                   </View>}
                              {selectedGallery == null || selectedGallery === "" ?
                                   <View style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center", marginTop: 50 }}>
                                        <View style={styles.iconContainer}>
                                             <TouchableOpacity onPress={galleryBack}>
                                                  <Image
                                                       source={require('../../../assert/gallery.png')}  // Replace with the actual image source
                                                       style={styles.icon}
                                                  />
                                             </TouchableOpacity>
                                             <Text style={styles.labelMedia}>Gallery</Text>
                                        </View>

                                        <View style={styles.iconContainer}>
                                             <TouchableOpacity onPress={OpenCameraBack}>
                                                  <EvilIcons name="camera" size={76} color="black" />
                                             </TouchableOpacity>
                                             <Text style={styles.labelMedia}>Camera</Text>
                                        </View>
                                   </View> : null}
                              <View style={{ flexDirection: "row", marginBottom: 211 }}>

                                   <View
                                        style={styles.submitStyle}>
                                        <TouchableOpacity onPress={FormValidateFront}>
                                             <Text style={{ color: "white", fontSize: 18, fontWeight: "800" }}>SUBMIT</Text>
                                        </TouchableOpacity>

                                   </View>

                              </View>
                         </ScrollView>
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
          </SafeAreaProvider>
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
          fontSize: 15,
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
          marginTop: 10
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
export default AdharImageScreen