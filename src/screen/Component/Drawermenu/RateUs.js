import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput, Button, Snackbar } from 'react-native-paper'
import { SelectList } from 'react-native-dropdown-select-list';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment';
import { useNavigation } from '@react-navigation/native';
const RequestScreen = () => {
     const navigation = useNavigation();
     const [isDatePickerFromVisible, setDatePickerFromVisibility] = useState(false);
     const [isDatePickerToVisible, setDatePickerToVisibility] = useState(false);
     const [fromDate, setFromDate] = useState("");
     const [amount, setAmount] = useState("");
     const [remark, setRemark] = useState("");
     const Submit = () => {
          setAmount("")
          setRemark("")
     }
     const [snackBarText, setSnackBarText] = useState('');
     const [visibleSnackBar, setVisibleSnackBar] = useState(false);
     const onShowSnackBar = () => setVisibleSnackBar(true);
     const onDismissSnackBar = () => setVisibleSnackBar(false);
     const FormValidate = () => {
          if (selected === null || selected === '') {
               setSnackBarText('Please Select Company');
               setVisibleSnackBar(true);
          }
          else if (trans === null || trans === '') {
               setSnackBarText('Please Select Transaction');
               setVisibleSnackBar(true);
          }
          else if (bank === null || bank === '') {
               setSnackBarText('Please Select Bank');
               setVisibleSnackBar(true);
          }
          else if (amount === null || amount === '') {
               setSnackBarText('Please Enter Amount');
               setVisibleSnackBar(true);
          }
          else if (remark === null || remark === '') {
               setSnackBarText('Please Enter Remark');
               setVisibleSnackBar(true);
          }
          else if (fromDate === null || fromDate === '') {
               setSnackBarText('Please Choose Date');
               setVisibleSnackBar(true);
          } else {
               setAmount("")
               setSelected("");
               setBank("");
               setRemark("");
               setTransaction("")
               setFromDate("")
          }
     };
     useEffect(() => {
          var d = new Date();
          Moment.locale('en');
          var dateFormated = Moment(d).format('DD/MM/YYYY');
          setFromDate(dateFormated);

     }, [])
     const showDatePickerFrom = () => {
          setDatePickerFromVisibility(true);
     };

     const hideDatePickerFrom = () => {
          setDatePickerFromVisibility(false);
     };
     const handleFromDate = (date) => {
          Moment.locale('en');
          var dateFormated = Moment(date).format('DD/MM/YYYY');
          setFromDate(dateFormated);
          hideDatePickerFrom();
     };
     const [selected, setSelected] = React.useState("");
     const [trans, setTransaction] = React.useState("");
     const [bank, setBank] = React.useState("");
     const company = [
          {
               key: '1', value: 'Company', disabled: true
          },
          { key: '2', value: 'Distributor' },
     ]

     const transaction = [
          { key: "1", value: "Cash Deposit" },
          { key: "2", value: "IMPS" },
          { key: "3", value: "NEFT" },
          { key: "4", value: "RTGS" },
          { key: "5", value: "UPI" },
          { key: "6", value: "Credit" },
          { key: "7", value: "Cheque" },
          { key: "8", value: "Other" },
     ]
     const bankName = [
          { key: "1", value: "Federal Bank" },
          { key: "2", value: "SBI" },
          { key: "3", value: "South Indian-Bank" },
          { key: "4", value: "RBL-Bank" },
          { key: "5", value: "Cash" },
          { key: "6", value: "Credit" },
          { key: "7", value: "ICICI" },
          { key: "8", value: "HDFC-Bank" },
     ]
     const closeButton = () => {
          setAmount("")
          setRemark("")
          navigation.navigate("Home")
     }
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
                                   <Image source={require("../../../assert/cc1.png")} style={[styles.image,
                                   { height: 55, width: 45, marginLeft: 4 }]} />
                              </View>
                              <View style={{ width: "80%", marginHorizontal: 10 }}>
                                   <SelectList
                                        setSelected={(val) => setSelected(val)}
                                        searchPlaceholder="Select Company"
                                        boxStyles={{
                                             borderRadius: 6,
                                             borderColor: "#f2612b", height: 50, marginTop: 5, color: "#f2612b"
                                        }}
                                        data={company}
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
                                   borderRadius: 10, marginLeft: 5, borderColor: "#e58142",
                                   borderWidth: 1, justifyContent: "center"
                              }}>
                                   <Image source={require("../../../assert/trans.png")} style={[styles.image,
                                   { height: 50, width: 40, marginLeft: 6 }]} />
                              </View>
                              <View style={{ width: "80%", marginHorizontal: 10 }}>
                                   <SelectList
                                        setSelected={(val) => setTransaction(val)}
                                        searchPlaceholder="Select Transaction Method "
                                        boxStyles={{
                                             borderRadius: 6,
                                             borderColor: "#f2612b", height: 50, marginTop: 5, color: "#f2612b"
                                        }}
                                        data={transaction}
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
                                   borderRadius: 10, marginLeft: 5, borderColor: "#e58142",
                                   borderWidth: 1, justifyContent: "center"
                              }}>
                                   <Image source={require("../../../assert/bank.png")} style={[styles.image,
                                   { height: 35, width: 35, marginLeft: 8 }]} />
                              </View>
                              <View style={{ width: "80%", marginHorizontal: 10 }}>
                                   <SelectList
                                        setSelected={(val) => setBank(val)}
                                        searchPlaceholder="Select Bank Name"
                                        boxStyles={{
                                             borderRadius: 6,
                                             borderColor: "#f2612b", height: 50, marginTop: 5, color: "#f2612b"
                                        }}
                                        data={bankName}
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
                                   <Image source={require("../../../assert/r1.png")}
                                        style={[styles.image, { height: 40 }]} />
                              </View>
                              <TextInput
                                   style={styles.textInput}
                                   placeholder="Enter Amount"
                                   underlineColorAndroid="transparent"
                                   cursorColor="#5DADE2"
                                   label={"Amount"}
                                   mode='outlined'
                                   value={amount}
                                   activeOutlineColor='#5DADE2'
                                   activeUnderlineColor='#5DADE2'
                                   outlineColor='#f2612b'
                                   underlineColor='#f2612b'
                                   keyboardType='numeric'
                                   textColor='#f2612b'
                                   onChangeText={(value) => setAmount(value)}
                              />
                         </View>
                         <View style={{ flexDirection: "row", marginTop: 10 }}>
                              <View style={{
                                   heigh: 40, width: 55, marginTop: 4,
                                   borderRadius: 10, marginLeft: 5, borderColor: "#e58142", borderWidth: 1
                              }}>
                                   <TouchableOpacity onPress={showDatePickerFrom}>
                                        <Image source={require("../../../assert/cal.png")}
                                             style={[styles.image, { marginLeft: 3 }]} />
                                   </TouchableOpacity>
                              </View>
                              <TextInput
                                   style={styles.textInput} //9519831708
                                   placeholder="Select Date"
                                   underlineColorAndroid="transparent"
                                   cursorColor="#e58142"
                                   label={"Date"}
                                   mode='outlined'
                                   value={fromDate}
                                   textColor='#f2612b'
                                   outlineColor='#f2612b'
                                   underlineColor='#f2612b'
                                   activeOutlineColor='#5DADE2'
                                   activeUnderlineColor='#5DADE2'

                              />
                              <DateTimePickerModal
                                   isVisible={isDatePickerFromVisible}
                                   mode="date"
                                   onConfirm={handleFromDate}
                                   onCancel={hideDatePickerFrom}
                              />
                         </View>
                         <View style={{ flexDirection: "row", marginTop: 9 }}>
                              <View style={{
                                   heigh: 40, width: 55, marginTop: 4,
                                   borderRadius: 10, marginLeft: 5, borderColor: "#e58142", borderWidth: 1, justifyContent: "center"
                              }}>
                                   <Image source={require("../../../assert/r1.png")}
                                        style={[styles.image, { height: 40 }]} />
                              </View>
                              <TextInput
                                   style={styles.textInput}
                                   placeholder="Enter Remark / Bank Ref No"
                                   underlineColorAndroid="transparent"
                                   cursorColor="#5DADE2"
                                   label={"Remark / Bank Ref No"}
                                   mode='outlined'
                                   value={remark}
                                   activeOutlineColor='#5DADE2'
                                   activeUnderlineColor='#5DADE2'
                                   outlineColor='#f2612b'
                                   underlineColor='#f2612b'
                                   keyboardType='numeric'
                                   textColor='#f2612b'
                                   onChangeText={(value) => setRemark(value)}
                              />
                         </View>
                         <View style={{
                              marginTop: 24, paddingBottom: 16,
                              justifyContent: "space-between", flexDirection: "row", width: "100%"
                         }}>
                              <TouchableOpacity onPress={closeButton} style={{
                                   backgroundColor: "#e58142", height: 40,
                                   paddingTop: 2, color: "white", width: "40%", borderRadius: 10, marginHorizontal: 11
                              }}>
                                   <Button>
                                        <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>CLOSE</Text>
                                   </Button>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={FormValidate} style={{
                                   backgroundColor: "#5DADE2", height: 40,
                                   paddingTop: 2, color: "white", width: "40%", borderRadius: 10, marginHorizontal: 11
                              }}>
                                   <Button>
                                        <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>SEND</Text>
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
export default RequestScreen