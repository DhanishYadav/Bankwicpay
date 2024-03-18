import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TextInput, Snackbar } from 'react-native-paper';
const ForgetMobileScreen = () => {
     const navigation = useNavigation();
     const [mobile, setMobile] = useState("")
     const [snackBarText, setSnackBarText] = useState('');
     const [visibleSnackBar, setVisibleSnackBar] = useState(false);
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
               navigation.navigate("ForgetOtpScreen");
          }
     };
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
                                        width: 200, height: 200,
                                        resizeMode: 'contain', borderRadius: 10
                                   }}
                                   source={require('../../../assert/appicon.png')} />
                         </View>
                         <View style={{ flexDirection: "row", justifyContent: "center" }}>
                              <Text style={styles.label}>SIGN-IN</Text>
                         </View>
                         <TextInput
                              placeholder='Enter Mobile Number'
                              underlineColorAndroid="transparent"
                              cursorColor="#003990"
                              label={"Mobile Number"}
                              mode='outlined'
                              value={(mobile)}
                              outlineColor='#e58142'
                              underlineColor='#e58142'
                              activeOutlineColor='#e58142'
                              activeUnderlineColor='#e58142'
                              style={styles.input}
                              keyboardType='number-pad'
                              onChangeText={(value) => setMobile(value)}
                              left={<TextInput.Icon icon="phone" size={25} color="#e58142" style={{ marginTop: 10 }} />}
                         />
                         <View style={styles.spacing}></View>
                         <View style={{ flexDirection: "row" }}>
                              <TouchableOpacity onPress={() => {
                                   navigation.navigate("LoginTesting")
                              }}>
                                   <Text style={styles.text}>{"GoTo Sign In"}</Text>
                              </TouchableOpacity>
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
     text: {
          fontWeight: '800',
          fontSize: 16,
          color: 'gray',
          marginVertical: 10,
          marginHorizontal: 20
     },
     input: {
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
export default ForgetMobileScreen