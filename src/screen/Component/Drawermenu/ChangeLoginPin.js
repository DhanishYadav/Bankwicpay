import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button, Snackbar } from 'react-native-paper'
import { SelectList } from 'react-native-dropdown-select-list';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const MobileScreen = () => {
  const [mobile, setMobile] = useState("");
  const [serial, setSerial] = useState("");
  const [adhar, setAdhar] = useState("");
  const [amount, setAmount] = useState("");
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
    }
    else if (selected === null || selected === '') {
      setSnackBarText('Please Select Operator');
      setVisibleSnackBar(true);
    }
    else if (adhar === null || adhar === '') {
      setSnackBarText('Please Enter Aadhar Number');
      setVisibleSnackBar(true);
    }
    else if (adhar.length < 12) {
      setSnackBarText('Please Enter 12 Digit Aadhar Number');
      setVisibleSnackBar(true);
    }
    else if (amount === null || amount === '') {
      setSnackBarText('Please Enter Amount');
      setVisibleSnackBar(true);
    } else {
      setAmount("")
      setAdhar("")
      setMobile("");
      setSelected("");
    }
  };
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: '1', value: 'Mobiles', disabled: true },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers', disabled: true },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ]
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainStyle}>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{
              heigh: 40, width: 55, marginTop: 4,
              borderRadius: 10, marginLeft: 5, borderColor: "#e58142", borderWidth: 1
            }}>
              <Image source={require("../../../assert/mobile.png")}
                style={[styles.image, { marginLeft: 3 }]} />
            </View>
            <TextInput
              style={styles.textInput} //9519831708
              placeholder="Enter Mobile Number"
              underlineColorAndroid="transparent"
              cursorColor="#5DADE2"
              label={"Mobile Number"}
              mode='outlined'
              value={mobile}
              keyboardType='number-pad'
              maxLength={10}
              outlineColor='#f2612b'
              underlineColor='#f2612b'
              activeOutlineColor='#5DADE2'
              activeUnderlineColor='#5DADE2'
              onChangeText={(value) => setMobile(value)}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 9 }}>
            <View style={{
              heigh: 40, width: 55, marginTop: 4,
              borderRadius: 10, marginLeft: 5, borderColor: "#e58142", borderWidth: 1
            }}>
              <Image source={require("../../../assert/wifi.png")} style={[styles.image,
              { height: 45, width: 35, marginLeft: 8 }]} />
            </View>
            <View style={{ width: "80%", marginHorizontal: 10 }}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                searchPlaceholder="Search Data"
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
              borderRadius: 10, marginLeft: 5, borderColor: "#e58142", borderWidth: 1
            }}>
              <Image source={require("../../../assert/adhar.png")} style={styles.image} />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Search Adhar Number"
              underlineColorAndroid="transparent"
              cursorColor="#5DADE2"
              label={"Adhar Number"}
              mode='outlined'
              value={adhar}
              maxLength={12}
              keyboardType='number-pad'
              activeOutlineColor='#5DADE2'
              activeUnderlineColor='#5DADE2'
              outlineColor='#f2612b'
              underlineColor='#f2612b'
              onChangeText={(value) => setAdhar(value)}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 9 }}>
            <View style={{
              heigh: 40, width: 55, marginTop: 4,
              borderRadius: 10, marginLeft: 5, borderColor: "#e58142",
              borderWidth: 1, justifyContent: "center"
            }}>
              <Image source={require("../../../assert/r1.png")}
                style={[styles.image, { height: 30 }]} />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Amount"
              underlineColorAndroid="transparent"
              cursorColor="#5DADE2"
              label={"Amount"}
              mode='outlined'
              value={amount}
              maxLength={12}
              activeOutlineColor='#5DADE2'
              activeUnderlineColor='#5DADE2'
              outlineColor='#f2612b'
              keyboardType='number-pad'
              underlineColor='#f2612b'
              onChangeText={(value) => setAmount(value)}
            />
          </View>
          <View style={{
            marginTop: 40, paddingBottom: 16,
            justifyContent: "space-between", flexDirection: "row", width: "100%"
          }}>
            <TouchableOpacity style={{
              backgroundColor: "#e58142", height: 40,
              color: "white", width: "45%", borderRadius: 10, marginHorizontal: 6
            }}>
              <Button>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>Browse Plan</Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity onPress={FormValidate} style={{
              backgroundColor: "#5DADE2", height: 40,
              color: "white", width: "45%", borderRadius: 10, marginHorizontal: 6
            }}>
              <Button>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>Recharge</Text>
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
    flex: 1,
    backgroundColor: "white"
  },
  mainStyle: {
    marginTop: 10,
    height: 380,
    width: '96%',
    borderRadius: 10,
    marginHorizontal: 6,
    backgroundColor: "white",
    elevation: 10,
    marginBottom: 20
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
export default MobileScreen