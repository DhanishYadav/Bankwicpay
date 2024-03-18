import { View, StyleSheet, Dimensions, Image, Text } from 'react-native'
import React from 'react'

const UPIScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.MainView}>
        <View style={{
          height: 120, width: "100%",
          alignItems: "center", marginTop: 2,
        }}>
          <Image source={require("../../../assert/appicon.png")}
            style={{ height: 130, width: 200, }} />
        </View>
        <View style={{
          height: 150, width: "100%", marginTop: 10,
          alignItems: "center",
        }}>
          <Image source={require("../../../assert/qr.png")}
            style={{ height: 230, width: 230, }} />
        </View>
        <View style={{ marginTop: 120 }}>
          <View style={{
            height: 40,
            alignItems: "center", marginVertical: 5, backgroundColor: "#5DADE2", borderRadius: 8,
            justifyContent: "center", marginHorizontal: 2
          }}>
            <Text style={styles.test}>Manish Mobile Shop</Text>
          </View>
          <View style={{
            height: 40,
            alignItems: "center", marginTop: 5, backgroundColor: "#e58142",
            borderRadius: 8, justifyContent: "center", marginHorizontal: 2
          }}>
            <Text style={styles.test}>cfmer.1943MANISHMOBILESHOP@icici</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  MainView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 10,
    height: "72%",
    marginHorizontal: 6,
    marginTop: 8
  },
  test: {
    fontSize: 18, fontWeight: "bold", color: "white",
  }
})
export default UPIScreen