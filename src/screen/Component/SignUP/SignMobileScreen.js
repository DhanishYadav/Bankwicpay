import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { TextInput, Snackbar } from 'react-native-paper';
import Colors from '../../Constant/Colors';

const LoginTesting = () => {
     const navigation = useNavigation();
     const [mobile, setMobile] = useState("")
     const [snackBarText, setSnackBarText] = useState('');
     const [visibleSnackBar, setVisibleSnackBar] = useState(false);
     const [isloading, setIsloading] = useState(false);
     const onShowSnackBar = () => setVisibleSnackBar(true);
     const onDismissSnackBar = () => setVisibleSnackBar(false);
     const FormValidate = () => {
          if (mobile === null || mobile === '') {
               setSnackBarText('Please Enter Mobile');
               setVisibleSnackBar(true);
          } else if (mobile.length < 10) {
               setSnackBarText('Please Enter 10 Digit Mobile Number');
               setVisibleSnackBar(true);
          } else {
               setMobile("");
               navigation.navigate("OtpScreen");
          }
     };
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
                                        width: 120, height: 120,
                                        resizeMode: 'contain', borderRadius: 10
                                   }}
                                   source={require('../../../assert/appicon.png')} />
                         </View>
                         <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginHorizontal: 10 }}>
                              <Text style={styles.label}>NEW USER SIGN-UP</Text>
                              <Text style={styles.label}>1/9</Text>
                         </View>
                         <TextInput
                              placeholder='Enter Mobile Number'
                              underlineColorAndroid="transparent"
                              cursorColor="#e58142"
                              label={"Mobile Number"}
                              mode='outlined'
                              value={(mobile)}
                              outlineColor='#e58142'
                              underlineColor='#e58142'
                              activeOutlineColor='#e58142'
                              activeUnderlineColor='#e58142'
                              style={styles.inputStyle}
                              keyboardType='number-pad'
                              onChangeText={(value) => setMobile(value)}
                              left={<TextInput.Icon icon="phone" size={25} color="#e58142" style={{ marginTop: 10 }} />}
                         />

                         <View style={styles.spacing}></View>
                         <View style={{ flexDirection: "row", marginRight: 10 }}>
                         </View>
                         <View style={styles.spacing}></View>
                         <View style={{ flexDirection: "row" }}>
                              <Text style={styles.text}>{"By proceeding, you are giving us consent to do a Verification check and to call or SMS or WhatsApp with reference to the user application process"}</Text>
                         </View>
                         <View style={{ flexDirection: "row" }}>
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
          height: '55%',
          width: '80%',
          backgroundColor: 'white',
          position: 'absolute',
          top: 160,
          left: 40,
          borderRadius: 10,
          // shadowColor: '#ffffff',
          // shadowOffset: { width: 0, height: 2 },
          // shadowOpacity: 0.5,
          // shadowRadius:1,
          elevation: 20, // Elevation is used for Android shadow
     },
     label: {
          fontWeight: '600',
          fontSize: 16,
          color: 'gray',
     },
     snackBar: {
          backgroundColor: '#003990',
     },
     dropdown: {
          height: 50,
          borderColor: '#f2612b',
          borderWidth: 1,
          borderRadius: 8,
          marginVertical: 4,
          padding: 8,
     },
     input: {
          height: 35,
          margin: 5,
          borderRadius: 20,
          backgroundColor: 'white',
          padding: 6,
          color: "white",
          marginHorizontal: 10
     },
     text: {
          fontWeight: '500',
          fontSize: 14,
          color: 'gray',
          marginVertical: 10,
          marginHorizontal: 20
     },
     inputStyle: {
          marginVertical: 6,
          height: 45,
          backgroundColor: "white",
          color: "#e58142",
          width: "94%",
          elevation: 10,
          shadowColor: "#e58142",
          shadowOffset: {
               width: 5,
               height: 10,
          },
          shadowOpacity: 9,
          shadowRadius: 20,
          borderRadius: 10,
          marginHorizontal: 10
     },
     submitStyle: {
          margin: 10,
          backgroundColor: '#e58142',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          width: "90%",
          height: 45,
          marginTop: 20
     }
})
export default LoginTesting