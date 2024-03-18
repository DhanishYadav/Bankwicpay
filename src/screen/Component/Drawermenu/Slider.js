import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
//import StyleSheet from '../../Constant/StyleSheet'
import Swiper from 'react-native-swiper'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const Slider = () => {
     const navigation = useNavigation()
     return (
          <View style={styles.container}>
               <Swiper style={styles.wrapper} autoplay={false}
                    autoplayTimeout={3}
                    horizontal={true}
                    showsPagination={false}>
                    <View style={styles.slide1}>
                         <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 10, paddingTop: 5 }}>
                              {/* <Image source={require("../../../assert/wallet.png")} style={{ height: 50, width: 50, marginLeft: 20 }} /> */}
                              <Fontisto name="wallet" size={45} color={"white"} />
                              <Text style={styles.text}>Wallet Balance</Text>
                         </View>
                         <View style={{ justifyContent: "center", flexDirection: "row", marginTop: 20, height: 34 }}>
                              <TouchableOpacity style={{ height: 40, width: 120, borderWidth: 2, borderColor: "white", borderRadius: 20 }}>
                                   <Button style={styles.text}>
                                        <Text style={styles.Balance}> ₹ 0 </Text>
                                   </Button>
                              </TouchableOpacity>
                         </View>
                         <View style={{ flexDirection: "row", height: 2, backgroundColor: "white", marginTop: 30 }}></View>
                         <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 10, paddingTop: 10 }}>
                              <TouchableOpacity style={{ height: 40, width: 120, borderWidth: 2, borderColor: "white", borderRadius: 20 }}
                                   onPress={() => {
                                        navigation.navigate("AccountFD")
                                   }}>
                                   <Button style={styles.text}>
                                        <Text style={styles.Balance}> Request </Text>
                                   </Button>
                              </TouchableOpacity>
                              {/* ScanOR */}
                              <View style={{ flexDirection: "column", height: 30, backgroundColor: "white", width: 2 }}></View>
                              <TouchableOpacity style={{ height: 40, width: 120, borderWidth: 2, borderColor: "white", borderRadius: 20 }}
                                   onPress={() => {
                                        navigation.navigate("ScanOR")
                                   }}>
                                   <Button style={styles.text}>
                                        <Text style={styles.Balance}> Ledger </Text>
                                   </Button>
                              </TouchableOpacity>
                         </View>
                    </View>
                    <View style={styles.slide2}>
                         <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 10, marginBottom: 0 }}>
                              <Image source={require("../../../assert/payout.png")} style={{ height: 80, width: 80 }} />
                              <Text style={styles.text}>Commission</Text>
                         </View>
                         <View style={{ justifyContent: "center", flexDirection: "row", height: 34 }}>
                              <TouchableOpacity style={{ height: 40, width: 120, borderWidth: 2, borderColor: "white", borderRadius: 20 }}>
                                   <Button style={styles.text}>
                                        <Text style={styles.Balance}> ₹ 0 </Text>
                                   </Button>
                              </TouchableOpacity>
                         </View>
                         <View style={{ flexDirection: "row", height: 2, backgroundColor: "white", marginTop: 20 }}></View>
                         <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 10, paddingTop: 10 }}>
                              <TouchableOpacity style={{ height: 40, width: 120, borderWidth: 2, borderColor: "white", borderRadius: 20 }} onPress={() => {
                                   navigation.navigate("AddCommission")
                              }}>
                                   <Button style={styles.text}>
                                        <Text style={styles.Balance}> Transfer </Text>
                                   </Button>
                              </TouchableOpacity>
                              <View style={{ flexDirection: "column", height: 30, backgroundColor: "white", width: 2 }}></View>
                              <TouchableOpacity style={{ height: 40, width: 120, borderWidth: 2, borderColor: "white", borderRadius: 20 }} onPress={() => {
                                   navigation.navigate("Commission Report")
                              }}>
                                   <Button style={styles.text}>
                                        <Text style={styles.Balance}> Statement </Text>
                                   </Button>
                              </TouchableOpacity>
                         </View>
                    </View>
                    <View style={styles.slide3}>
                         <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 10, paddingTop: 1 }}>
                              <Image source={require("../../../assert/pay.png")} style={{ height: 80, width: 80 }} />
                              <Text style={styles.text}>Payout</Text>
                         </View>
                         <View style={{ justifyContent: "center", flexDirection: "row", marginTop: 0, height: 34 }}>
                              <TouchableOpacity style={{ height: 40, width: 120, borderWidth: 2, borderColor: "white", borderRadius: 20 }}>
                                   <Button style={styles.text}>
                                        <Text style={styles.Balance}> ₹ 0 </Text>
                                   </Button>
                              </TouchableOpacity>
                         </View>
                         <View style={{ flexDirection: "row", height: 2, backgroundColor: "white", marginTop: 20 }}></View>
                         <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 10, paddingTop: 10 }}>
                              <TouchableOpacity style={{ height: 40, width: 120, borderWidth: 2, borderColor: "white", borderRadius: 20 }} onPress={() => {
                                   navigation.navigate("AddPayout")
                              }}>
                                   <Button style={styles.text}>
                                        <Text style={styles.Balance}> Transfer </Text>
                                   </Button>
                              </TouchableOpacity>
                              <View style={{ flexDirection: "column", height: 30, backgroundColor: "white", width: 2 }}></View>
                              <TouchableOpacity style={{ height: 40, width: 120, borderWidth: 2, borderColor: "white", borderRadius: 20 }} onPress={() => {
                                   navigation.navigate("PayoutReport")
                              }}>
                                   <Button style={styles.text}>
                                        <Text style={styles.Balance}> Statement </Text>
                                   </Button>
                              </TouchableOpacity>
                         </View>
                    </View>
               </Swiper>
          </View>
     )
}
const styles = StyleSheet.create({
     wrapper: {
          borderRadius: 20,
          marginRight: 30
     },
     container: {
          flex: 1,
     },
     slide1: {
          flex: 1,
          backgroundColor: '#d17029',
          borderRadius: 10,
          elevation: 10,
          marginRight: 2,
     },
     slide2: {
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#d17029',
          borderRadius: 10,
          marginRight: 2
     },
     slide3: {
          flex: 1,
          backgroundColor: '#d17029',
          borderRadius: 10,
          marginRight: 2
     },
     text: {
          color: 'white',
          fontSize: 21,
          fontWeight: 'bold'
     },
     Balance: {
          color: 'white',
          fontSize: 14,
          fontWeight: 'bold'
     }
})
export default Slider