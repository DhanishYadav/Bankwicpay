import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, Snackbar } from 'react-native-paper'
import { Image } from 'react-native-animatable'

const Transfer = () => {
     const [mobileNumber, setMobileNumber] = useState('+ 91 ');
     const handleMobileNumberChange = (text) => {
          setMobileNumber(text);
     };
     const [snackBarText, setSnackBarText] = useState('');
     const [visibleSnackBar, setVisibleSnackBar] = useState(false);
     const onShowSnackBar = () => setVisibleSnackBar(true);
     const onDismissSnackBar = () => setVisibleSnackBar(false);

     const FormValidate = () => {
          if (mobileNumber === null || mobileNumber === '') {
               setSnackBarText('Please Enter Mobile');
               setVisibleSnackBar(true);
          } else if (mobileNumber.length < 10) {
               setSnackBarText('Please Enter 10 Digit Mobile Number');
               setVisibleSnackBar(true);
          } else {
               setMobileNumber("");
          }
     };
     return (
          <View style={styles.container}>
               <View style={{ height: 200 }}>
                    <Image source={require("../../../assert/hand1.jpg")}
                         style={styles.image} />
               </View>
               <View style={{ marginTop: 50 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 22 }}>Mobile Number</Text>
                    <TextInput
                         style={styles.textInput}
                         placeholder="Search Mobile Number"
                         underlineColorAndroid="transparent"
                         keyboardType="numeric"
                         cursorColor="#e58142"
                         maxLength={13}
                         outlineColor='#f2612b'
                         underlineColor='#f2612b'
                         value={mobileNumber}
                         onChangeText={handleMobileNumberChange}
                    />
                    <View style={{ marginTop: 10 }}>
                         <TouchableOpacity onPress={FormValidate}>
                              <Button style={{
                                   backgroundColor: "#e58142", marginHorizontal: 20, height: 45,
                                   paddingTop: 4, color: "white"
                              }}>
                                   <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>SUBMIT</Text>
                              </Button>
                         </TouchableOpacity>
                    </View>
               </View>
               <Snackbar
                    visible={visibleSnackBar}
                    onDismiss={onDismissSnackBar}
                    style={{ backgroundColor: '#f2612b' }}
                    action={{
                         label: 'Dismiss',
                         onPress: () => {
                              onDismissSnackBar();
                         },
                    }}>
                    {snackBarText}
               </Snackbar>
          </View>
     )
}
const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "white"
     },
     textInput: {
          height: 50,
          margin: 10,
          padding: 5,
          backgroundColor: "white",
          color: "#5DADE2",
          width: "90%",
          marginLeft: 20,
          elevation: 10,
          shadowColor: "#5DADE2",
          shadowOffset: {
               width: 10,
               height: 20,
          },
          shadowOpacity: 9,
          shadowRadius: 20,
          borderRadius: 10,
          paddingLeft: 10
     },
     image: {
          height: 190,
          width: "100%",
          resizeMode: "contain"
     }
})
export default Transfer