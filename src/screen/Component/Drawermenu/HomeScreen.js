// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Slider from './Slider';
import BottomNav from '../../RootNavigation/BottomNavb';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    setCurrentDate((new Date().toLocaleString()).toUpperCase());
  }, []);
  const handleTextClick = (index) => {
    setActiveIndex(index);
  }
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.sliderStyle}>
          <Slider />
        </View>
        <View style={{ marginVertical: 6, justifyContent: "center", alignItems: "center", }}>
          <Text style={[styles.text, { fontSize: 19, fontWeight: "bold" }]}>Our Services</Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center", width: "100%" }}>
          <View style={styles.box}>
            <View style={[styles.box1]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("UPI Payout")
              }}>
                <AntDesign name="alipay-circle" size={36} color={"#e58142"} style={styles.icon} />
                <Text style={[styles.text, { paddingTop: 10 }]}>UPI Payout</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.box2]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("Fund Transfer")
              }}>
                <MaterialCommunityIcons name="bank-transfer" size={45} color={"#e58142"} style={styles.icon} />
                <Text style={styles.text}>Transfer</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.box3]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("PreApproved")
              }}>
                <Image source={require("../../../assert/aeps.png")} style={{ height: 50, width: 40 }} />
                {/* <MaterialIcons name="perm-data-setting" size={35} color={"#e58142"} style={styles.icon} /> */}
                <Text style={styles.text}>AEPS</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.box}>
            <View style={[styles.box1]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("Mobile Recharge")
              }}>
                <AntDesign name="mobile1" size={45} color={"#e58142"} style={styles.icon} />
                <Text style={[styles.text, { paddingTop: 3 }]}>Mobile</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.box2]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("DTH Recharge")
              }}>
                <FontAwesome name="skyatlas" size={45} color={"#e58142"} style={styles.icon} />
                <Text style={[styles.text, { paddingTop: 3, marginLeft: 10 }]}> DTH </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.box3]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("Mini ATM")
              }}>
                <MaterialCommunityIcons name="atm" size={45} color={"#e58142"} style={styles.icon} />
                <Text style={styles.text}> MATM </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.box}>
            <View style={[styles.box1]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("MutualFunds")
              }}>
                <MaterialIcons name="collections" size={45} color={"#e58142"} style={styles.icon} />
                <Text style={[styles.text, { paddingTop: 1 }]}> UPI Collect </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.box2]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("Bill Payments")
              }}>
                <MaterialIcons name="payments" size={50} color={"#e58142"} style={styles.icon} />
                <Text style={styles.text}>Bill Payments</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.box3]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("FasTag")
              }}>
                <MaterialCommunityIcons name="tag-arrow-right" size={45} color={"#e58142"} style={styles.icon} />
                <Text style={styles.text}>CC Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.box}>
            <View style={[styles.box1]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("HotelScreen")
              }}>
                <MaterialCommunityIcons name="home-city" size={45} color={"#e58142"} style={styles.icon} />
                <Text style={[styles.text, { paddingTop: 1 }]}>  Hotel </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.box2]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("BusScreen")
              }}>
                <FontAwesome5 name="bus" size={40} color={"#e58142"} style={styles.icon} />
                <Text style={styles.text}>   Bus</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.box3]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("FlightScreen")
              }}>
                <MaterialIcons name="flight-takeoff" size={45} color={"#e58142"} style={styles.icon} />
                <Text style={styles.text}>  Flight</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginVertical: 6, justifyContent: "center", alignItems: "center", }}>
            <Text style={[styles.text, { fontSize: 19, fontWeight: "bold" }]}>My Account</Text>
          </View>
          <View style={styles.box}>
            <View style={[styles.box1]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("AccountFD")
              }}>
                <MaterialCommunityIcons name="frequently-asked-questions" size={45} color={"#e58142"} style={styles.icon} />
                <Text style={styles.text}> Request </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.box2]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("CardForex")
              }}>
                <MaterialCommunityIcons name="cash-refund" size={45} color={"#e58142"} style={styles.icon} />
                <Text style={[styles.text, { paddingTop: 5 }]}> Refund </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.box3]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("LoansScreen")
              }}>
                <AntDesign name="gift" size={45} color={"#e58142"} style={styles.icon} />
                <Text style={[styles.text, { paddingTop: 5 }]}> Beneficiary </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginVertical: 6, }}>
            <Text style={[styles.text, { fontSize: 19, fontWeight: "bold" }]}>Reports</Text>
          </View>
          <View style={styles.box}>
            <View style={[styles.box1]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("AddPayout")
              }}>
                <MaterialCommunityIcons name="bank-plus" size={45} color={"#e58142"} style={styles.icon} />
                <Text style={[styles.text, { paddingTop: 2 }]}> Payout </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.box2]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("Commission Report")
              }}>
                <FontAwesome5 name="comments-dollar" size={45} color={"#e58142"} style={styles.icon} />
                <Text style={[styles.text, { paddingTop: 5 }]}> Commission </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.box3]}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("RequestRefund")
              }}>
                <MaterialIcons name="report-problem" size={35} color={"#e58142"} style={styles.icon} />
                <Text style={styles.text}> R Report </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "bold", marginBottom: 60 }}>{currentDate}</Text>
        </View>
      </ScrollView>
      <BottomNav />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  sliderStyle: {
    height: 200,
    width: '98%',
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    borderRadius: 10,
    marginTop: 5
  },
  boxParent: {
    width: '98%',
    height: 60,
    justifyContent: "space-around",
    flexDirection: "row",
    marginHorizontal: 6,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 20
  },
  boxSecond: {
    width: '98%',
    height: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 6,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: "#e3ebf6",
    alignItems: "center",
    textAlign: "center",
  },
  boxSecond11: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center"
  },
  boxSecond1: {
    width: '100%',
    height: 40,
    borderRadius: 20,
    backgroundColor: "#eb8f46",
    alignItems: "center",
    justifyContent: "center",
    color: 'white',

  },
  box: {
    width: '90%',
    height: 70,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 6,
    marginBottom: 20,
    marginHorizontal: 10,
    alignItems: "center",
  },
  text1: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  },
  text11: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  Trading: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 30
  },
  box1: {
    width: '24%',
    height: 80,// blue
    borderRadius: 10,
    margin: 4,
    elevation: 6,
    backgroundColor: '#F7EEE6',
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10
  },
  box2: {
    width: '24%',
    height: 80,// blue
    borderRadius: 10,
    margin: 4,
    elevation: 6,
    backgroundColor: '#F7EEE6',
    justifyContent: "center",
    alignItems: "center"
  },
  box3: {
    width: '24%',
    height: 80,// blue
    borderRadius: 10,
    margin: 4,
    elevation: 6,
    backgroundColor: '#F7EEE6',
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 12,
    color: 'gray',
    fontWeight: "bold"
  },
  activeText: {
    backgroundColor: '#f2612b', // Change to your desired active color
    borderRadius: 10,
  },
  icon: {
    alignSelf: "center"
  }
});

export default HomeScreen;
