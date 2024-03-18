import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button, Snackbar } from 'react-native-paper'

const AEPScreen = () => {
  const [serial, setSerial] = useState("");
  const [adhar, setAdhar] = useState("");

  const [snackBarText, setSnackBarText] = useState('');
  const [visibleSnackBar, setVisibleSnackBar] = useState(false);
  const onShowSnackBar = () => setVisibleSnackBar(true);
  const onDismissSnackBar = () => setVisibleSnackBar(false);
  const FormValidate = () => {
    if (serial === null || serial === '') {
      setSnackBarText('Please Enter Serial Number');
      setVisibleSnackBar(true);
    }
    else if (adhar === null || adhar === '') {
      setSnackBarText('Please Enter Aadhar Number');
      setVisibleSnackBar(true);
    }
    else if (adhar.length < 12) {
      setSnackBarText('Please Enter 12 Digit Aadhar Number');
      setVisibleSnackBar(true);
    } else {
      setSerial("")
      setAdhar("")
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainStyle}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{
            heigh: 40, width: 55, marginTop: 4,
            borderRadius: 10, marginLeft: 5, borderColor: "#e58142", borderWidth: 1
          }}>
            <Image source={require("../../../assert/serial1.jpg")}
              style={[styles.image, { marginLeft: 3 }]} />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Device Serial Number"
            underlineColorAndroid="transparent"
            cursorColor="#5DADE2"
            label={"Device Serial Number"}
            mode='outlined'
            value={serial}
            outlineColor='#f2612b'
            underlineColor='#f2612b'
            activeOutlineColor='#5DADE2'
            activeUnderlineColor='#5DADE2'
            onChangeText={(value) => setSerial(value)}
          />
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
            activeOutlineColor='#5DADE2'
            activeUnderlineColor='#5DADE2'
            outlineColor='#f2612b'
            underlineColor='#f2612b'
            onChangeText={(value) => setAdhar(value)}
          />
        </View>
        <View style={{ marginTop: 30, marginLeft: 60 }}>
          <TouchableOpacity onPress={FormValidate}>
            <Button style={{
              backgroundColor: "#e58142", marginHorizontal: 40, height: 45,
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
    flex: 1
  },
  mainStyle: {
    marginTop: 10,
    height: 250,
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
export default AEPScreen