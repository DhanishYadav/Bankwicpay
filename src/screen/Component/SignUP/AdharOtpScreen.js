import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Snackbar } from 'react-native-paper';
const AdharOtpScreen = () => {
  const navigation = useNavigation();
  const [snackBarText, setSnackBarText] = useState('');
  const [visibleSnackBar, setVisibleSnackBar] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const onShowSnackBar = () => setVisibleSnackBar(true);
  const onDismissSnackBar = () => setVisibleSnackBar(false);
  const edit1 = useRef();
  const edit2 = useRef();
  const edit3 = useRef();
  const edit4 = useRef();
  const edit5 = useRef();
  const edit6 = useRef();
  const [f1, setf1] = useState("");
  const [f2, setf2] = useState("");
  const [f3, setf3] = useState("");
  const [f4, setf4] = useState("");
  const [f5, setf5] = useState("");
  const [f6, setf6] = useState("");
  const [timer, setTimer] = useState(30);
  const Submit = () => {
    navigation.navigate("AdharImageScreen")
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
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
                width: 120, height: 120,
                resizeMode: 'contain', borderRadius: 10
              }}
              source={require('../../../assert/appicon.png')} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 5 }}>
            <Text style={styles.label}>Verify Aadhar One Time Password</Text>
            <Text style={styles.label}>6/9</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center", }}>
            <Text style={styles.otpText}>OTP sent your aadhar registered mobile number</Text>
          </View>
          <View style={styles.otpView}>
            <TextInput ref={edit1} style={[styles.inputView, { borderColor: f1.length >= 1 ? "#f2612b" : "#003990" }]}
              keyboardType='number-pad' maxLength={1}
              onChangeText={txt => {
                setf1(txt)
                if (txt.length >= 1) {
                  edit2.current.focus();
                }
              }} cursorColor="#003990"
              value={f1}
            />
            <TextInput ref={edit2} style={[styles.inputView, { borderColor: f2.length >= 1 ? "#f2612b" : "#003990" }]}
              keyboardType='number-pad' maxLength={1} onChangeText={txt => {
                setf2(txt)
                if (txt.length >= 1) {
                  edit3.current.focus();
                }
                else if (txt.length < 1) {
                  edit1.current.focus();
                }
              }} cursorColor="#003990"
              value={f2}
            />
            <TextInput ref={edit3} style={[styles.inputView, { borderColor: f3.length >= 1 ? "#f2612b" : "#003990" }]}
              keyboardType='number-pad' maxLength={1}
              value={f3}
              onChangeText={txt => {
                setf3(txt)
                if (txt.length >= 1) {
                  edit4.current.focus();
                }
                else if (txt.length < 1) {
                  edit2.current.focus();
                }
              }} cursorColor="#003990" />
            <TextInput ref={edit4} style={[styles.inputView, { borderColor: f4.length >= 1 ? "#f2612b" : "#003990" }]}
              keyboardType='number-pad' maxLength={1}
              value={f4}
              onChangeText={txt => {
                setf4(txt)
                if (txt.length >= 1) {
                  edit5.current.focus();
                }
                else if (txt.length < 1) {
                  edit3.current.focus();
                }
              }}
              cursorColor="#003990" />
            <TextInput ref={edit5} style={[styles.inputView, { borderColor: f5.length >= 1 ? "#f2612b" : "#003990" }]}
              keyboardType='number-pad' maxLength={1}
              value={f5}
              onChangeText={txt => {
                setf5(txt)
                if (txt.length >= 1) {
                  edit6.current.focus();
                }
                else if (txt.length < 1) {
                  edit4.current.focus();
                }
              }}
              cursorColor="#003990" />
            <TextInput ref={edit6} style={[styles.inputView, { borderColor: f6.length >= 1 ? "#e58142" : "#003990" }]}
              keyboardType='number-pad'
              maxLength={1} cursorColor="#003990"
              value={f6}
              onChangeText={txt => {
                setf6(txt)
                if (txt.length >= 1) {
                  edit6.current.focus();
                }
                else if (txt.length < 1) {
                  edit5.current.focus();
                }
              }}
            />

          </View>
          <View style={styles.spacing}></View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Text style={styles.text}>Resend OTP : {timer}s </Text>
          </View>
          <View style={{ flexDirection: "row" }}>

            <View
              style={[styles.submitStyle, { backgroundColor: f1 !== "" && f2 !== "" && f3 !== "" && f4 !== "" && f5 !== "" && f6 !== "" ? "#e58142" : "gray" }]}>
              <TouchableOpacity onPress={Submit}
                disabled={f1 !== "" && f2 !== "" && f3 !== "" && f4 !== "" && f5 !== "" && f6 !== "" ? false : true}
              >
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
    elevation: 20, // Elevation is used for Android shadow
  },
  label: {
    fontWeight: '400',
    paddingLeft: 5,
    fontSize: 16,
    color: 'gray',
    marginVertical: 8
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
  input: {
    height: 35,
    margin: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 6,
    color: "white",
    marginHorizontal: 10
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    color: 'gray',
    marginVertical: 10,
    marginHorizontal: 20
  },
  inputStyle: {
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
    marginTop: 50
  },
  otpView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10
  },
  inputView: {
    width: 44,
    height: 45,
    borderWidth: .8,
    borderRadius: 8,
    marginLeft: 6,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800"
  },
  otp: {
    fontWeight: '800',
    fontSize: 14,
    color: '#e58142',
  },
  otpText: {
    fontWeight: '600',
    fontSize: 14,
    color: 'gray',
  },
  text: {
    fontWeight: '700',
    fontSize: 14,
    color: 'gray',
    marginVertical: 10,
    alignSelf: "flex-end"
  },
})
export default AdharOtpScreen;