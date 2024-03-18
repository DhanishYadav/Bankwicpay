import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TextInput, Snackbar } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const SignUpDetails = () => {
  const navigation = useNavigation();
  const [shop, setShop] = useState("")
  const [area, setArea] = useState("")
  const [city, setCity] = useState("")
  const [pin, setPin] = useState("")
  const [email, setEmail] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [parentCode, setParentCode] = useState("")
  const [shopNumber, setShopNumber] = useState("")
  const [snackBarText, setSnackBarText] = useState('');
  const [visibleSnackBar, setVisibleSnackBar] = useState(false);
  const onShowSnackBar = () => setVisibleSnackBar(true);
  const onDismissSnackBar = () => setVisibleSnackBar(false);

  const FormValidate = () => {
    if (shop === null || shop === '') {
      setSnackBarText('Please Enter Shop Name');
      setVisibleSnackBar(true);
    }
    else if (shopNumber === null || shopNumber === '') {
      setSnackBarText('Please Enter Shop/Building Number');
      setVisibleSnackBar(true);
    }
    else if (area === null || area === '') {
      setSnackBarText('Please Enter Area Name');
      setVisibleSnackBar(true);
    }
    else if (city === null || city === '') {
      setSnackBarText('Please Enter City Name');
      setVisibleSnackBar(true);
    }
    else if (pin === null || pin === '') {
      setSnackBarText('Please Enter Pin Number');
      setVisibleSnackBar(true);
    }
    else if (email === null || email === '') {
      setSnackBarText('Please Enter Email Id');
      setVisibleSnackBar(true);
    }
    else if (parentCode === null || parentCode === '') {
      setSnackBarText('Please Enter Parent Code Number');
      setVisibleSnackBar(true);
    }
    else if (selected === null || selected === '') {
      setSnackBarText('Please Select the Role');
      setVisibleSnackBar(true);
    }
    else if (distributor === null || distributor === '') {
      setSnackBarText('Please  Select Distributor');
      setVisibleSnackBar(true);
    }
    else {
      setParentCode("");
      setPin("");
      setArea("");
      setCity("");
      setDistributor("");
      setEmail("");
      setShop("");
      setSelected("");
      setShopNumber("");
      navigation.navigate("SelfiScreen");
    }
  };
  const [selected, setSelected] = React.useState("");
  const [distributor, setDistributor] = React.useState("");
  const data = [
    { key: '1', value: 'Money Transfer Shop', disabled: true },
    { key: '2', value: 'Mobile Shop' },
    { key: '3', value: 'General Store' },
    { key: '4', value: 'Hardware / Electronics Store', },
    { key: '5', value: 'Grocery / Kirana Store' },
    { key: '6', value: 'Medical Store' },
    { key: '8', value: 'Fashion Store' },
    { key: '9', value: 'Food & Beverages' },
    { key: '10', value: 'Property Consultant' },
    { key: '11', value: 'Travel Store' },
    { key: '12', value: 'AutoMobile' },
    { key: '13', value: 'Beauty' },
    { key: '14', value: 'Charity / NGO / Society' },
    { key: '15', value: 'Others' },
  ]
  const dataBase = [{
    key: '1', value: 'Retailer',
  }, {
    key: '2', value: 'Distributor'
  }
  ]
  const validateEmail = (text) => {
    const emailPattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailPattern.test(text);
    setIsValidEmail(isValid);
    setEmail(text);
  };
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.container1}>
        </View>
        <View style={styles.triangleChild}>
          <ScrollView>
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
            <View style={styles.spacing_big}></View>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.label}>Business Details for the Sign-UP</Text>
              <Text style={styles.label}>8/9</Text>
            </View>
            <TextInput
              placeholder='Enter Shop Name'
              underlineColorAndroid="transparent"
              cursorColor="#003990"
              label={"Shop Name"}
              mode='outlined'
              value={shop}
              outlineColor='#e58142'
              underlineColor='#e58142'
              activeOutlineColor='#e58142'
              activeUnderlineColor='#e58142'
              style={styles.input}
              onChangeText={(text) => setShop(text)}

            />
            <TextInput
              placeholder='Enter Building Name'
              underlineColorAndroid="transparent"
              cursorColor="#003990"
              label={"Shop No, Building Name..."}
              mode='outlined'
              value={shopNumber}
              outlineColor='#e58142'
              underlineColor='#e58142'
              activeOutlineColor='#e58142'
              activeUnderlineColor='#e58142'
              style={styles.input}
              onChangeText={(text) => setShopNumber(text)}
            ></TextInput>
            <TextInput
              placeholder='Enter LandMark,Area'
              underlineColorAndroid="transparent"
              cursorColor="#003990"
              label={"LandMark / Area"}
              mode='outlined'
              value={area}
              outlineColor='#e58142'
              underlineColor='#e58142'
              activeOutlineColor='#e58142'
              activeUnderlineColor='#e58142'
              style={styles.input}
              onChangeText={(text) => setArea(text)}
            />
            <TextInput
              placeholder='Enter City'
              underlineColorAndroid="transparent"
              cursorColor="#003990"
              label={"City / District"}
              mode='outlined'
              value={city}
              outlineColor='#e58142'
              underlineColor='#e58142'
              activeOutlineColor='#e58142'
              activeUnderlineColor='#e58142'
              style={styles.input}
              onChangeText={(text) => setCity(text)}
            />
            <TextInput
              placeholder='Enter Pin Number'
              underlineColorAndroid="transparent"
              cursorColor="#003990"
              label={"Pin Number"}
              mode='outlined'
              value={pin}
              keyboardType='number-pad'
              outlineColor='#e58142'
              underlineColor='#e58142'
              activeOutlineColor='#e58142'
              activeUnderlineColor='#e58142'
              style={styles.input}
              onChangeText={(text) => setPin(text)}
            />
            <TextInput
              placeholder='Enter Email Id'
              underlineColorAndroid="transparent"
              cursorColor="#003990"
              label={"Email Id"}
              mode='outlined'
              value={email}
              outlineColor='#e58142'
              underlineColor='#e58142'
              activeOutlineColor='#e58142'
              activeUnderlineColor='#e58142'
              style={styles.input}
              onChangeText={(text) => validateEmail(text)}
            />
            {!isValidEmail && (
              <Text style={{ color: '#f2612b' }}>Please enter a valid email address.</Text>
            )}
            <TextInput
              placeholder='Enter Parent Code For Mapping'
              underlineColorAndroid="transparent"
              cursorColor="#003990"
              label={"Parent Code For Mapping"}
              mode='outlined'
              value={parentCode}
              outlineColor='#e58142'
              underlineColor='#e58142'
              activeOutlineColor='#e58142'
              activeUnderlineColor='#e58142'
              style={styles.input}
              onChangeText={(text) => setParentCode(text)}
            />
            <View style={{ width: "96%", marginHorizontal: 5 }}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                searchPlaceholder="Search Data"
                boxStyles={{
                  borderRadius: 6,
                  borderColor: "#f2612b", height: 50, marginTop: 5, color: "#f2612b"
                }}
                data={dataBase}
                save="value"
                arrowicon={<FontAwesome name="chevron-down" size={16} color={'#e58142'}
                />}
                searchicon={<FontAwesome name="search" size={16} color={'#e58142'}
                  style={{ marginRight: 19 }} />}
                inputStyles={{ fontSize: 15, fontWeight: "bold", color: "#e58142" }}
                dropdownStyles={{ backgroundColor: "white", borderColor: "#e58142" }}
                dropdownTextStyles={{ color: "#f2612b", fontSize: 13, fontWeight: "bold", }}
              />
            </View>
            <View style={{ width: "96%", marginHorizontal: 5 }}>
              <SelectList
                setSelected={(val) => setDistributor(val)}
                searchPlaceholder="Search Data"
                boxStyles={{
                  borderRadius: 6,
                  borderColor: "#f2612b", height: 50, marginTop: 5, color: "#f2612b"
                }}
                data={data}
                save="value"
                arrowicon={<FontAwesome name="chevron-down" size={16} color={'#e58142'}
                />}
                searchicon={<FontAwesome name="search" size={16} color={'#e58142'}
                  style={{ marginRight: 19 }} />}
                inputStyles={{ fontSize: 15, fontWeight: "bold", color: "#e58142" }}
                dropdownStyles={{ backgroundColor: "white", borderColor: "#e58142" }}
                dropdownTextStyles={{ color: "#e58142", fontSize: 13, fontWeight: "bold", }}
              />
            </View>
            <View style={styles.spacing}></View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={styles.submitStyle}>
                <TouchableOpacity onPress={FormValidate}>
                  <Text style={{ color: "white", fontSize: 18, fontWeight: "800" }}>SUBMIT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
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
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  label: {
    fontWeight: '400',
    paddingLeft: 5,
    fontSize: 17,
    color: 'gray',
    marginHorizontal: 8,
    marginVertical: 10
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
  text: {
    fontWeight: '500',
    fontSize: 14,
    color: 'gray',
    marginVertical: 10,
    marginHorizontal: 20
  },
  input: {
    marginVertical: 3,
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
    marginTop: 20
  },
  input: {
    marginVertical: 6,
    // height: 50,
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
    marginHorizontal: 8
  },
})
export default SignUpDetails;