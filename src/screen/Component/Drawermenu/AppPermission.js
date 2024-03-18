import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'
import { SelectList } from 'react-native-dropdown-select-list';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const RefundReport = () => {
  const [id, setID] = useState("");
  const [amount, setAmount] = useState("");
  const Submit = () => {
    setID("")
    setAmount("")
  }
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: '1', value: 'Tata Play', disabled: true },
    { key: '2', value: 'Airtel Digital TV' },
    { key: '3', value: 'VideoCon D2H' },
    { key: '4', value: 'Dish TV', disabled: true },
    { key: '5', value: 'Sun Direct' },
    { key: '6', value: 'Tata Sky' },
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
              placeholder="Customer id / Subscriber id"
              underlineColorAndroid="transparent"
              cursorColor="#5DADE2"
              label={"Customer id / Subscriber id"}
              mode='outlined'
              value={id}
              textColor='#f2612b'
              outlineColor='#f2612b'
              underlineColor='#f2612b'
              activeOutlineColor='#5DADE2'
              activeUnderlineColor='#5DADE2'
              onChangeText={(value) => setID(value)}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 9 }}>
            <View style={{
              heigh: 40, width: 55, marginTop: 4,
              borderRadius: 10, marginLeft: 5, borderColor: "#e58142",
              borderWidth: 1, justifyContent: "center"
            }}>
              <Image source={require("../../../assert/wifi.png")} style={[styles.image,
              { height: 45, width: 35, marginLeft: 8 }]} />
            </View>
            <View style={{ width: "80%", marginHorizontal: 10 }}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                searchPlaceholder="Search Product"
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
              <Image source={require("../../../assert/r1.png")}
                style={[styles.image, { height: 40 }]} />
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
              activeUnderlineColor='#e58142'
              outlineColor='#e58142'
              underlineColor='#f2612b'
              keyboardType='numeric'
              textColor='#f2612b'
              onChangeText={(value) => setAmount(value)}
            />
          </View>
          <View style={{ marginTop: 24, marginLeft: 60, paddingBottom: 16 }}>
            <TouchableOpacity onPress={Submit}>
              <Button style={{
                backgroundColor: "#e58142", marginHorizontal: 40, height: 45,
                paddingTop: 4, color: "white"
              }}>
                <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>SEARCH</Text>
              </Button>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    height: 300,
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
export default RefundReport