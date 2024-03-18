import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button, Snackbar } from 'react-native-paper'
const BenefitScreen = () => {
  const [Beneficiary, setBeneficiary] = useState("");
  const [account, setAccount] = useState("");
  const [code, setCode] = useState("");
  const [snackBarText, setSnackBarText] = useState('');
  const [visibleSnackBar, setVisibleSnackBar] = useState(false);
  const onShowSnackBar = () => setVisibleSnackBar(true);
  const onDismissSnackBar = () => setVisibleSnackBar(false);


  const FormValidate = () => {
    if (Beneficiary === null || Beneficiary === '') {
      setSnackBarText('Please Enter Beneficiary Name');
      setVisibleSnackBar(true);
    }
    else if (account === null || account === '') {
      setSnackBarText('Please Enter Account Number');
      setVisibleSnackBar(true);
    }
    else if (code === null || code === '') {
      setSnackBarText('Please Enter Code Number');
      setVisibleSnackBar(true);
    }
    else if (account.length < 12) {
      setSnackBarText('Please Enter 12 Digit Aadhar Number');
      setVisibleSnackBar(true);
    } else {
      setBeneficiary("")
      setAccount("")
      setCode("")
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainStyle}>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{
              heigh: 40, width: 55, marginTop: 4,
              borderRadius: 10, marginLeft: 5, borderColor: "#e58142", borderWidth: 1
            }}>
              <Image source={require("../../../assert/acc1.png")}
                style={[styles.image, { height: 50 }]} />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Beneficiary Name"
              underlineColorAndroid="transparent"
              cursorColor="#e58142"
              label={"Beneficiary Name"}
              mode='outlined'
              value={Beneficiary}
              outlineColor='#e58142'
              underlineColor='#e58142'
              activeOutlineColor='#e58142'
              activeUnderlineColor='#e58142'
              onChangeText={(value) => setBeneficiary(value)}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 9 }}>
            <View style={{
              heigh: 50, width: 55, marginTop: 4,
              borderRadius: 10, marginLeft: 5,
              borderColor: "#e58142", borderWidth: 1, alignSelf: "center"
            }}>
              <Image source={require("../../../assert/bank1.png")} style={[styles.image]} />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Account Number"
              underlineColorAndroid="transparent"
              cursorColor="#5DADE2"
              label={"Account Number"}
              mode='outlined'
              value={account}
              outlineColor='#e58142'
              underlineColor='#e58142'
              activeOutlineColor='#e58142'
              activeUnderlineColor='#e58142'
              onChangeText={(value) => setAccount(value)}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 9 }}>
            <View style={{
              heigh: 40, width: 55, marginTop: 4,
              borderRadius: 10, borderColor: "#e58142",
              borderWidth: 1, justifyContent: "center", alignContent: "center", marginLeft: 5,
            }}>
              <Image source={require("../../../assert/code.png")}
                style={[styles.image, { height: 40 }]} />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter IFSC Code"
              underlineColorAndroid="transparent"
              cursorColor="#5DADE2"
              label={"IFSC Code"}
              mode='outlined'
              value={code}
              outlineColor='#e58142'
              underlineColor='#e58142'
              activeOutlineColor='#e58142'
              activeUnderlineColor='#e58142'
              onChangeText={(value) => setCode(value)}
            />
          </View>
          <View style={{ marginTop: 24, marginLeft: 60, paddingBottom: 16 }}>
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
    height: 50, width: 40,
    borderRadius: 10,
    resizeMode: "contain", marginLeft: 6, marginBottom: 4
  }
})
export default BenefitScreen