import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BBPScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={() => { navigation.navigate("BillList") }}>
            <Image source={require("../../../assert/ele1.png")}
              style={{ height: 60, width: 80, resizeMode: "contain" }} />
          </TouchableOpacity>
          <Text style={styles.text}>Electricity</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={() => { navigation.navigate("BillList") }}>
            <Image source={require("../../../assert/cl1.png")}
              style={{ height: 60, width: 80, resizeMode: "contain" }} />
          </TouchableOpacity>
          <Text style={styles.text}>Gas</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate("BillList") }}>
            <Image source={require("../../../assert/fast.png")}
              style={{ height: 80, width: 80, resizeMode: "contain" }} />
          </TouchableOpacity>
          <Text style={styles.text}>Fastag</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate("BillList") }}>
            <Image source={require("../../../assert/water.jpg")}
              style={{ height: 80, width: 80, resizeMode: "contain" }} />
          </TouchableOpacity>
          <Text style={styles.text}>Water</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainView: {
    marginTop: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 6,
    height: 120,
    elevation: 10,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  text: {
    fontSize: 16, fontWeight: "600", color: "#e58142", padding: 10, textAlign: "center"
  }
})
export default BBPScreen