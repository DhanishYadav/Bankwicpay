import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TextInput, Snackbar } from 'react-native-paper';
const PasswordScreen = () => {
     const navigation = useNavigation();
     const [password, setPassword] = useState('');
     const [confirm, setConfirm] = useState('');
     const [isValid, setIsValid] = useState(true);
     const [snackBarText, setSnackBarText] = useState('');
     const [visibleSnackBar, setVisibleSnackBar] = useState(false);
     const onShowSnackBar = () => setVisibleSnackBar(true);
     const onDismissSnackBar = () => setVisibleSnackBar(false);

     const FormValidate = () => {
          if (password === null || password === '') {
               setSnackBarText('Please Enter Password');
               setVisibleSnackBar(true);
          } else if (password.length < 10) {
               setSnackBarText('Please Enter 12  Character/Number');
               setVisibleSnackBar(true);
          }
          else if (password !== confirm) {
               setSnackBarText('Password is not Matching');
               setVisibleSnackBar(true);
          }

          else {
               setPassword("");
               navigation.navigate("LoginTesting");
          }
     };
     const validatePassword = (value) => {
          const hasLowerCase = /[a-z]/.test(value);
          const hasUpperCase = /[A-Z]/.test(value);
          const hasNumber = /\d/.test(value);
          const hasSpecialCharacter = /[!@#$%^&*()\-_=+\[\]{};:'",.<>?/\\|]/.test(value);
          const isLengthValid = value.length >= 10;
          if (hasLowerCase && hasUpperCase && hasNumber && hasSpecialCharacter && isLengthValid) {
               setIsValid(true);
          } else {
               setIsValid(false);
          }
          setPassword(value);
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
                                        width: 140, height: 150,
                                        resizeMode: 'contain', borderRadius: 10
                                   }}
                                   source={require('../../../assert/appicon.png')} />
                         </View>
                         <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                              <Text style={styles.label}>CREATE YOUR PASSWORD</Text>
                         </View>
                         <TextInput
                              placeholder='Enter Password '
                              underlineColorAndroid="transparent"
                              cursorColor="#003990"
                              label={"Enter Password"}
                              mode='outlined'
                              value={password}
                              outlineColor='#e58142'
                              underlineColor='#e58142'
                              activeOutlineColor='#e58142'
                              activeUnderlineColor='#e58142'
                              style={styles.input}
                              onChangeText={(value) => validatePassword(value)}
                              left={<TextInput.Icon icon="lock" size={25} color="#e58142" style={{ marginTop: 10 }} />}
                         />
                         <TextInput
                              placeholder='Enter Confirm Password'
                              underlineColorAndroid="transparent"
                              cursorColor="#003990"
                              label={"Confirm Password"}
                              mode='outlined'
                              value={confirm}
                              outlineColor='#e58142'
                              underlineColor='#e58142'
                              activeOutlineColor='#e58142'
                              activeUnderlineColor='#e58142'
                              style={styles.input}
                              onChangeText={(value) => setConfirm(value)}
                              left={<TextInput.Icon icon="lock-check" size={25} color="#e58142" style={{ marginTop: 10 }} />}
                         />
                         {!isValid && (
                              <Text style={{ color: '#f2612b' }}>
                                   Password must be at least 12 characters long and contain
                                   At Least 1 capital letter, At Least 1 small letter, At Least 1 number, At Least 1 special character.
                              </Text>
                         )}
                         <View style={styles.spacing}></View>
                         <View style={{ flexDirection: "row", marginTop: 10 }}>
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
          fontWeight: '500',
          fontSize: 14,
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
export default PasswordScreen