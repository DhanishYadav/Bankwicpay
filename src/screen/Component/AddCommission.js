import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button, Snackbar } from 'react-native-paper'
import Foundation from 'react-native-vector-icons/Foundation';
const AddCommission = () => {
     const [pin, setPin] = useState("");
     const [snackBarText, setSnackBarText] = useState('');
     const [visibleSnackBar, setVisibleSnackBar] = useState(false);
     const onShowSnackBar = () => setVisibleSnackBar(true);
     const onDismissSnackBar = () => setVisibleSnackBar(false);
     const FormValidate = () => {
          if (pin === null || pin === '') {
               setSnackBarText('Please Enter Pin');
               setVisibleSnackBar(true);
          }
          else  {
               setPin("");
          }
     };
     return (
          <View style={styles.container}>
               <ScrollView>
                    <View style={styles.mainStyle}>
                         <View style={{ flexDirection: "row", marginTop: 10 }}>
                              <View style={{
                                   width: 55,
                                   borderRadius: 10, borderColor: "#e58142",
                                   borderWidth: 1, justifyContent: "center", alignItems: "center"
                              }}>
                                   <Foundation name="key" size={30} color={"#e58142"} />
                              </View>
                              <TextInput
                                   style={styles.textInput}
                                   placeholder="Enter Secure Pin"
                                   underlineColorAndroid="transparent"
                                   cursorColor="#5DADE2"
                                   label={"Secure Pin"}
                                   mode='outlined'
                                   value={pin}
                                   textColor='#f2612b'
                                   outlineColor='#e58142'
                                   underlineColor='#e58142'
                                   activeOutlineColor='#5DADE2'
                                   activeUnderlineColor='#5DADE2'
                                   onChangeText={(value) => setPin(value)}
                              />
                         </View>
                         <View style={{
                              marginTop: 24, paddingBottom: 16,
                              justifyContent: "center", flexDirection: "row",
                         }}>
                              <TouchableOpacity onPress={FormValidate} style={{
                                   backgroundColor: "#e58142", height: 40, width: "60%",
                                   paddingTop: 2, color: "white", borderRadius: 10, marginLeft: 60
                              }}>
                                   <Button>
                                        <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>SUBMIT</Text>
                                   </Button>
                              </TouchableOpacity>
                         </View>
                    </View>
               </ScrollView>
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
          flex: 1
     },
     mainStyle: {
          marginTop: 10,
          height: "110%",
          width: '96%',
          borderRadius: 10,
          marginHorizontal: 6,
          backgroundColor: "white"
     },
     textInput: {
          height: 50,
          backgroundColor: "white",
          color: "#5DADE2",
          width: "80%",
          elevation: 10,
          shadowColor: "#5DADE2",
          shadowOffset: {
               width: 10,
               height: 20,
          },
          shadowOpacity: 9,
          shadowRadius: 20,
          borderRadius: 10,
          paddingLeft: 10,
          marginHorizontal: 10
     },
     image: {
          height: 54, width: 50,
          borderRadius: 10,
          resizeMode: "contain"
     }
})
export default AddCommission