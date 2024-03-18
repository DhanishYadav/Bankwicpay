import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const CongratScreen = () => {
     const navigation = useNavigation();
     const [pan, setPan] = useState("")
     const Submit = () => {
          setPan("")
          navigation.navigate("LoginTesting")
     }
     return (
          <SafeAreaProvider>
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
                                        width: 200, height: 250,
                                        resizeMode: 'contain', borderRadius: 10
                                   }}
                                   source={require('../../../assert/appicon.png')} />
                         </View>
                         <View style={styles.spacing_big}></View>
                         <View style={{ justifyContent: "center" }}>
                              <Text style={styles.label}>Congratulation</Text>
                              <Text style={styles.label}>Your merchant account is created</Text>
                         </View>
                         <View style={{ flexDirection: "row" }}>
                              <View
                                   style={styles.submitStyle}>
                                   <TouchableOpacity onPress={Submit}>
                                        <Text style={{ color: "white", fontSize: 18, fontWeight: "800" }}>SUBMIT</Text>
                                   </TouchableOpacity>

                              </View>

                         </View>
                    </View>
               </View>
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
          height: '55%',
          width: '80%',
          backgroundColor: 'white',
          position: 'absolute',
          top: 160,
          left: 40,
          borderRadius: 10,
          elevation: 20, // Elevation is used for Android shadow
     },
     label: {
          fontWeight: '600',
          paddingLeft: 5,
          fontSize: 18,
          color: 'gray',
          justifyContent: "center",
          textAlign: "center",
          marginVertical: 6

     },
     text: {
          fontWeight: '500',
          fontSize: 18,
          color: 'gray',
          marginVertical: 10,
          marginHorizontal: 20,

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
     },

})
export default CongratScreen;