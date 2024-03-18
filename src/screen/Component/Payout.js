import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button, Snackbar } from 'react-native-paper'
import { SelectList } from 'react-native-dropdown-select-list';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const AddPayout = () => {
     const [pin, setPin] = useState("");
     const [amount, setAmount] = useState("");
     const [selected, setSelected] = useState("");
     const Submit = () => {
          setPin("")
          setAmount("")
     }
     const [snackBarText, setSnackBarText] = useState('');
     const [visibleSnackBar, setVisibleSnackBar] = useState(false);
     const onShowSnackBar = () => setVisibleSnackBar(true);
     const onDismissSnackBar = () => setVisibleSnackBar(false);
     const FormValidate = () => {
          if (pin === null || pin === '') {
               setSnackBarText('Please Enter Pin');
               setVisibleSnackBar(true);
          }
          else if (selected === null || selected === '') {
               setSnackBarText('Please Select Bank ');
               setVisibleSnackBar(true);
          }
          else if (amount === null || amount === '') {
               setSnackBarText('Please Enter Amount');
               setVisibleSnackBar(true);
          } else {
               setAmount("")
               setPin("");
               setSelected("");
          }
     };
     const navigation = useNavigation();
     const data = [
          { key: '1', value: 'Transfer to wallet' },
          { key: '2', value: 'AXIS BANK' },
          { key: '3', value: 'BOB' },
          { key: '4', value: 'SBI', disabled: true },
          { key: '5', value: 'PNB' },
          { key: '6', value: 'ICICI' },
     ]
     return (
          <View style={styles.container}>
               <ScrollView>
                    <View style={styles.mainStyle}>
                         <View style={{ flexDirection: "row", marginTop: 9 }}>
                              <View style={{
                                   heigh: 40, width: 55, marginTop: 4,
                                   borderRadius: 10, marginLeft: 5, borderColor: "#e58142",
                                   borderWidth: 1, justifyContent: "center"
                              }}>
                                   <Image source={require("../../assert/bank1.png")} style={[styles.image,
                                   { height: 45, width: 35, marginLeft: 8 }]} />
                              </View>
                              <View style={{ width: "80%", marginHorizontal: 10 }}>
                                   <SelectList
                                        setSelected={(val) => setSelected(val)}
                                        searchPlaceholder="Search Bank Name"
                                        boxStyles={{
                                             borderRadius: 6,
                                             borderColor: "#f2612b", height: 50, marginTop: 5, color: "#f2612b"
                                        }}
                                        data={data}
                                        save="value"
                                        arrowicon={<FontAwesome name="chevron-down" size={18} color={'#e58142'}
                                        />}
                                        searchicon={<FontAwesome name="search" size={18} color={'#e58142'}
                                             style={{ marginRight: 19 }} />}
                                        inputStyles={{ fontSize: 15, fontWeight: "bold", color: "#e58142" }}
                                        dropdownStyles={{ backgroundColor: "white", borderColor: "#e58142" }}
                                        dropdownTextStyles={{ color: "#f2612b", fontSize: 13, fontWeight: "bold", }}
                                   />
                              </View>
                         </View>
                         <View style={{ flexDirection: "row", marginTop: 9 }}>
                              <View style={{
                                   heigh: 40, width: 55, marginTop: 4,
                                   borderRadius: 10, marginLeft: 5, borderColor: "#e58142", borderWidth: 1, justifyContent: "center"
                              }}>
                                   <Image source={require("../../assert/r1.png")}
                                        style={[styles.image, { height: 30 }]} />
                              </View>
                              <TextInput
                                   style={styles.textInput}
                                   placeholder="Enter Amount"
                                   underlineColorAndroid="transparent"
                                   cursorColor="#e58142"
                                   label={"Amount"}
                                   mode='outlined'
                                   value={amount}
                                   activeOutlineColor='#5DADE2'
                                   activeUnderlineColor='#5DADE2'
                                   outlineColor='#e58142'
                                   underlineColor='#e58142'
                                   keyboardType='numeric'
                                   textColor='#f2612b'
                                   onChangeText={(value) => setAmount(value)}
                              />
                         </View>
                         <View style={{ flexDirection: "row", marginTop: 10 }}>
                              <View style={{
                                   width: 55,
                                   borderRadius: 10, borderColor: "#e58142",
                                   borderWidth: 1, justifyContent: "center", alignItems: "center"
                              }}>
                                   <Foundation name="key" size={30} color={"#f2612b"} />
                              </View>
                              <TextInput
                                   style={styles.textInput} //9519831708
                                   placeholder="Enter Secure Pin"
                                   underlineColorAndroid="transparent"
                                   cursorColor="#e58142"
                                   label={"Secure Pin"}
                                   mode='outlined'
                                   value={pin}
                                   textColor='#f2612b'
                                   outlineColor='#f2612b'
                                   underlineColor='#f2612b'
                                   activeOutlineColor='#5DADE2'
                                   activeUnderlineColor='#5DADE2'
                                   onChangeText={(value) => setPin(value)}
                              />
                         </View>
                         <View style={{
                              marginTop: 24, paddingBottom: 16,
                              justifyContent: "space-between", flexDirection: "row", width: "100%"
                         }}>
                              <TouchableOpacity style={{
                                   backgroundColor: "#e58142", height: 40,
                                   paddingTop: 2, color: "white", width: "45%", borderRadius: 10, marginHorizontal: 6
                              }} onPress={() => {
                                   navigation.navigate("BenefitScreen")
                              }}>
                                   <Button>
                                        <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>ADD BENEFICIARY</Text>
                                   </Button>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={FormValidate} style={{
                                   backgroundColor: "#5DADE2", height: 40,
                                   paddingTop: 2, color: "white", width: "45%", borderRadius: 10, marginHorizontal: 6
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
export default AddPayout