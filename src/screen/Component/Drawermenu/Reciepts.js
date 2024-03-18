import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button, Snackbar } from 'react-native-paper'

const AtmScreen = () => {
  const [BalanceMobile, setBalanceMobileNumber] = useState("");
  const [Balancemail, setEmailBalance] = useState("");
  const [cashMobile, setCashMobile] = useState("");
  const [cashAmount, setCashAmount] = useState("");
  const [cashEmail, setCashEmail] = useState("");
  const [saleEmail, setSaleEmail] = useState("");
  const [saleAmount, setSaleAmount] = useState("");
  const [saleMobile, setSaleMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [balanceShow, setBalanceShow] = useState(true);
  const [cashShow, setCashShow] = useState(false);
  const [sale, setSaleShow] = useState(false);
  const Submit = () => {
    setMobileNumber("")
    setEmailBalance("")
  }
  const [snackBarText, setSnackBarText] = useState('');
  const [visibleSnackBar, setVisibleSnackBar] = useState(false);
  const onShowSnackBar = () => setVisibleSnackBar(true);
  const onDismissSnackBar = () => setVisibleSnackBar(false);
  const BalanceValidate = () => {
    if (BalanceMobile === null || BalanceMobile === '') {
      setSnackBarText('Please Enter Mobile Number');
      setVisibleSnackBar(true);
    }
    else if (Balancemail === null || Balancemail === '') {
      setSnackBarText('Please Enter Email Id');
      setVisibleSnackBar(true);
    }
    else if (BalanceMobile.length < 10) {
      setSnackBarText('Please Enter 10 Digit Mobile Number');
      setVisibleSnackBar(true);
    } else {
      setBalanceMobileNumber("")
      setEmailBalance("")
    }
  };

  const CashValidate = () => {
    if (cashMobile === null || cashMobile === '') {
      setSnackBarText('Please Enter Mobile Number');
      setVisibleSnackBar(true);
    }
    else if (cashAmount === null || cashAmount === '') {
      setSnackBarText('Please Enter Cash Amount ');
      setVisibleSnackBar(true);
    }
    else if (cashEmail === null || cashEmail === '') {
      setSnackBarText('Please Enter Email Id');
      setVisibleSnackBar(true);
    }
    else if (cashMobile.length < 10) {
      setSnackBarText('Please Enter 10 Digit Mobile Number');
      setVisibleSnackBar(true);
    } else {
      setCashAmount("")
      setCashEmail("")
      setCashMobile("")
    }
  };

  const SaleValidate = () => {
    if (saleMobile === null || saleMobile === '') {
      setSnackBarText('Please Enter Mobile Number');
      setVisibleSnackBar(true);
    }
    else if (saleEmail === null || saleEmail === '') {
      setSnackBarText('Please Enter Email Id');
      setVisibleSnackBar(true);
    }
    else if (saleAmount === null || saleAmount === '') {
      setSnackBarText('Please Enter Sale Amount ');
      setVisibleSnackBar(true);
    }
    else if (BalanceMobile.length < 10) {
      setSnackBarText('Please Enter 10 Digit Mobile Number');
      setVisibleSnackBar(true);
    } else {
      setSaleEmail("")
      setSaleAmount("")
      setSaleMobile("")
    }
  };
  const BalanceShow = () => {
    setBalanceShow(true)
    setCashShow(false)
    setSaleShow(false)
  }
  const showView = () => {
    setBalanceShow(false)
    setCashShow(true)
    setSaleShow(false)
  }
  const saleShow = () => {
    setSaleShow(true)
    setCashShow(false)
    setBalanceShow(false)
  }
  return (
    <View style={styles.container}>
      <View style={styles.mainStyle}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 6, marginTop: 7 }}>
          {balanceShow === true ? <TouchableOpacity onPress={BalanceShow}>
            <View style={[styles.view1, { backgroundColor: "#e58142",width:"100%"}]}>
              <Text style={[styles.textStyle, { color: "white" }]}>Balance Enquiry</Text>
            </View>
          </TouchableOpacity> : <TouchableOpacity onPress={BalanceShow}>
            <View style={styles.view1}>
              <Text style={styles.textStyle}>Balance Enquiry</Text>
            </View>
          </TouchableOpacity>}
          {cashShow === true ? <TouchableOpacity onPress={showView}>
            <View style={[styles.view1, { backgroundColor: "#e58142" }]}>
              <Text style={[styles.textStyle, { color: "white" }]}>Cash Withdrawal</Text>
            </View>
          </TouchableOpacity> : <TouchableOpacity onPress={showView}>
            <View style={styles.view1}>
              <Text style={styles.textStyle}>Cash Withdrawal</Text>
            </View>
          </TouchableOpacity>}
          {sale === true ? <TouchableOpacity onPress={saleShow}>
            <View style={[styles.view1, { backgroundColor: "#e58142" }]}>
              <Text style={[styles.textStyle, { color: "white" }]}>Sale</Text>
            </View>
          </TouchableOpacity> : <TouchableOpacity onPress={saleShow}>
            <View style={styles.view1}>
              <Text style={styles.textStyle}>Sale</Text>
            </View>
          </TouchableOpacity>}
        </View>
        {balanceShow && (
          <>
            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <View style={styles.sideIcon}>
                <Image source={require("../../../assert/mobile.png")} style={styles.image} />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Mobile Number"
                underlineColorAndroid="transparent"
                cursorColor="#5DADE2"
                label={"Mobile Number"}
                mode='outlined'
                outlineColor='#f2612b'
                underlineColor='#f2612b'
                value={BalanceMobile}
                activeOutlineColor='#5DADE2'
                activeUnderlineColor='#5DADE2'
                onChangeText={(value) => setBalanceMobileNumber(value)}
              />
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={styles.sideIcon}>
                <Image source={require("../../../assert/mail.png")} style={styles.image} />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Email Id"
                underlineColorAndroid="transparent"
                cursorColor="#5DADE2"
                label={"Email Id"}
                mode='outlined'
                value={Balancemail}
                outlineColor='#f2612b'
                underlineColor='#f2612b'
                activeOutlineColor='#5DADE2'
                activeUnderlineColor='#5DADE2'
                onChangeText={(value) => setEmailBalance(value)}
              />
            </View>
            <View style={{ marginTop: 30, marginLeft: 60 }}>
              <TouchableOpacity onPress={BalanceValidate}>
                <Button style={{
                  backgroundColor: "#e58142", marginHorizontal: 40, height: 45,
                  paddingTop: 4, color: "white"
                }}>
                  <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>SUBMIT</Text>
                </Button>
              </TouchableOpacity>
            </View>
          </>
        )}
        {cashShow && (
          <>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={styles.sideIcon}>
                <Image source={require("../../../assert/mobile.png")} style={styles.image} />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Mobile Number"
                underlineColorAndroid="transparent"
                cursorColor="#5DADE2"
                label={"Mobile Number"}
                mode='outlined'
                value={cashMobile}
                outlineColor='#f2612b'
                underlineColor='#f2612b'
                activeOutlineColor='#5DADE2'
                activeUnderlineColor='#5DADE2'
                onChangeText={(value) => setCashMobile(value)}
              />
            </View>
            <View style={{ flexDirection: "row", marginTop: 9 }}>
              <View style={styles.sideIcon}>
                <Image source={require("../../../assert/r1.png")} style={styles.image} />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Amount"
                underlineColorAndroid="transparent"
                cursorColor="#5DADE2"
                label={"Amount"}
                mode='outlined'
                outlineColor='#f2612b'
                underlineColor='#f2612b'
                value={cashAmount}
                activeOutlineColor='#5DADE2'
                activeUnderlineColor='#5DADE2'
                onChangeText={(value) => setCashAmount(value)}
              />
            </View>
            <View style={{ flexDirection: "row", marginTop: 9 }}>
              <View style={styles.sideIcon}>
                <Image source={require("../../../assert/mail.png")} style={styles.image} />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Email Id (Optional)"
                underlineColorAndroid="transparent"
                cursorColor="#5DADE2"
                label={"Email Id"}
                mode='outlined'
                value={cashEmail}
                activeOutlineColor='#5DADE2'
                activeUnderlineColor='#5DADE2'
                outlineColor='#f2612b'
                underlineColor='#f2612b'
                onChangeText={(value) => setCashEmail(value)}
              />
            </View>
            <View style={{ marginTop: 16, marginLeft: 60 }}>
              <TouchableOpacity onPress={CashValidate}>
                <Button style={{
                  backgroundColor: "#e58142", marginHorizontal: 40, height: 45,
                  paddingTop: 4, color: "white"
                }}>
                  <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>SUBMIT</Text>
                </Button>
              </TouchableOpacity>
            </View>
          </>
        )}
        {sale && (
          <>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={styles.sideIcon}>
                <Image source={require("../../../assert/mobile.png")} style={styles.image} />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Mobile Number"
                underlineColorAndroid="transparent"
                cursorColor="#5DADE2"
                label={"Mobile Number"}
                mode='outlined'
                value={saleMobile}
                outlineColor='#f2612b'
                underlineColor='#f2612b'
                activeOutlineColor='#5DADE2'
                activeUnderlineColor='#5DADE2'
                onChangeText={(value) => setSaleMobile(value)}
              />
            </View>
            <View style={{ flexDirection: "row", marginTop: 9 }}>
              <View style={styles.sideIcon}>
                <Image source={require("../../../assert/r1.png")} style={styles.image} />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Amount"
                underlineColorAndroid="transparent"
                cursorColor="#5DADE2"
                label={"Amount"}
                mode='outlined'
                value={saleAmount}
                outlineColor='#f2612b'
                underlineColor='#f2612b'
                activeOutlineColor='#5DADE2'
                activeUnderlineColor='#5DADE2'
                onChangeText={(value) => setSaleAmount(value)}
              />
            </View>
            <View style={{ flexDirection: "row", marginTop: 9 }}>
              <View style={styles.sideIcon}>
                <Image source={require("../../../assert/mail.png")} style={styles.image} />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Email Id (Optional)"
                underlineColorAndroid="transparent"
                cursorColor="#5DADE2"
                label={"Email Id"}
                mode='outlined'
                value={saleEmail}
                outlineColor='#f2612b'
                underlineColor='#f2612b'
                activeOutlineColor='#5DADE2'
                activeUnderlineColor='#5DADE2'
                onChangeText={(value) => setSaleEmail(value)}
              />
            </View>
            <View style={{ marginTop: 16, marginLeft: 60 }}>
              <TouchableOpacity onPress={SaleValidate}>
                <Button style={{
                  backgroundColor: "#e58142", marginHorizontal: 40, height: 45,
                  paddingTop: 4, color: "white"
                }}>
                  <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>SUBMIT</Text>
                </Button>
              </TouchableOpacity>
            </View>
          </>
        )}
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
  mainStyle: {
    marginTop: 10,
    height: "50%",
    width: '96%',
    borderRadius: 10,
    marginHorizontal: 6,
    backgroundColor: "white",
    elevation: 8
  },
  textInput: {
    // height: 40,
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
    marginHorizontal: 10,
  },
  image: {
    height: 54, width: 50,
    borderRadius: 10,
    resizeMode: "contain", padding: 4
  },
  view1: {
    height: 40, borderRadius: 10, width: 120, justifyContent: "center", alignItems: "center", borderColor: "#5DADE2", borderWidth: 1
  },
  view2: {
    height: 40, borderRadius: 10, width: 140, justifyContent: "center", alignItems: "center", borderColor: "#5DADE2", borderWidth: 1
  },
  view3: {
    height: 40, borderRadius: 10, width: 80,
    justifyContent: "center", alignItems: "center", borderColor: "#e58142", borderWidth: 1
  },
  textStyle: {
    fontSize: 14, fontWeight: "bold", color: "gray"
  },
  sideIcon: {
    heigh: 45, width: 55, marginTop: 8,
    borderRadius: 10, marginLeft: 5, borderColor: "#e58142", borderWidth: 1
  }

})
export default AtmScreen