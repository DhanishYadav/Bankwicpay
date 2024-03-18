import { View, Text, ImageBackground, Platform, Image, UIManager, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const CustomDrawer = (props) => {
     const navigation = useNavigation();
     const [androidVersion, setAndroidVersion] = useState(null);
     const [selectedPhoto, setSelectedPhoto] = useState(null);
     const [name, setName] = useState("");
     const [employeeType, setEmployeeType] = useState('');

     useEffect(() => {
          getAndroidVersion();
          const intervalId = setInterval(() => {
               // editForm()
          }, 1000);
          return () => clearInterval(intervalId);
     }, []);

     const getAndroidVersion = async () => {
          try {
               const version = await DeviceInfo.getSystemVersion();
               setAndroidVersion(version);
          } catch (error) {
               console.error('Error retrieving Android version:', error);
          }
     };

     const handleLogout = async () => {
          Alert.alert(
               'Logout',
               'Are you sure you want to log out?',
               [
                    {
                         text: 'Cancel',
                         onPress: () => console.log('Cancel Pressed'),
                         style: 'cancel',
                    },
                    {
                         text: 'Logout',
                         onPress: () => {
                              //   AsyncStorage.removeItem('EmployeeCode');
                              // AsyncStorage.removeItem('name');
                              // AsyncStorage.removeItem('employeeType');
                              // AsyncStorage.removeItem('selectedPhoto');
                              //navigation.navigate("Login")
                         },
                    },
               ],
               { cancelable: false }
          );
     };
     const confirmCloseAccount = () => {
          Alert.alert(
               'Close Account',
               'Are you sure you want to close your account with mobile number *******327?',
               [
                    {
                         text: 'Cancel',
                         onPress: () => console.log('Cancel Pressed'),
                         style: 'cancel'
                    },
                    {
                         text: 'OK',
                         onPress: () => {
                              // Call function to close account here
                              console.log('Account closed successfully');
                         }
                    }
               ],
               { cancelable: false }
          );
     };
     if (Platform.OS === 'android') {
          UIManager.setLayoutAnimationEnabledExperimental(true);
     }

     return (
          <View style={styles.container}>
               <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "#2a2d34" }}>
                    <>
                         {props.state.routes.map((route, index) => {
                              let iconName;
                              if (route.name === 'Home') {
                                   iconName = 'home';
                              } else if (route.name === 'UPI Payout') {
                                   iconName = 'alipay-circle';
                              } else if (route.name === 'Fund Transfer') {
                                   iconName = 'filetext1';
                              } else if (route.name === 'AEPS') {
                                   iconName = 'setting';
                              } else if (route.name === 'UPI Collect') {
                                   iconName = 'calculator';
                              } else if (route.name === "Micro ATM / M-Pos") {
                                   iconName = 'codesquareo';
                              } else if (route.name === 'Bill Payments') {
                                   iconName = 'save';
                              } else if (route.name === 'Mobile Recharge') {
                                   iconName = 'pushpino';
                              } else if (route.name === 'DTH Recharge') {
                                   iconName = 'picture';
                              } else if (route.name === 'Balance Request') {
                                   iconName = 'checksquare';
                              }
                              else if (route.name === 'Commission Report') {
                                   iconName = 'staro';
                              }
                              else if (route.name === 'Close Account') {
                                   iconName = 'closesquareo';
                              }

                              return (
                                   <DrawerItem
                                        key={index}
                                        label={route.name}
                                        onPress={() => {
                                             navigation.navigate(route.name);
                                        }}
                                        icon={({ color, size }) => (
                                             <AntDesign name={iconName} size={size} color={"white"} />
                                        )}
                                        labelStyle={{ color: 'white' }} // Customize label color here
                                        style={index !== props.state.routes.length - 0 && styles.borderBottom}
                                   />
                              );
                         })}
                    </>

               </DrawerContentScrollView>
               <View style={{ height: 50, backgroundColor: "#2a2d34", paddingTop: 6 }}>
                    <TouchableOpacity onPress={confirmCloseAccount}>
                         <View style={styles.bottomClose}>
                              <AntDesign name="closecircleo" size={30} color="white" />
                              <Text style={[styles.testStyle, { fontSize: 20 }]}>Close Account</Text>
                         </View>
                    </TouchableOpacity>
               </View>
               <View style={{ height: 117, backgroundColor: "#2a2d34", paddingTop: 15 }}>
                    <TouchableOpacity onPress={handleLogout}>
                         <View style={styles.bottom}>
                              <SimpleLineIcons name="logout" size={24} color="white" />
                              <Text style={styles.testStyle}>LOGOUT</Text>
                              <Text style={styles.testStyle}>Version : {androidVersion}</Text>
                         </View>
                    </TouchableOpacity>
                    <View style={styles.BottomCode}>
                         <Text style={{ alignItems: "center", textAlign: "center", color: "white", fontWeight: "bold" }}>Powered By</Text>
                         <Text style={{ alignItems: "center", textAlign: "center", color: "white", fontWeight: "bold" }}>One Key Technology Private Limited</Text>
                    </View>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     textContainer: {
          paddingHorizontal: 10,
     },
     avatar: {
          width: 50,
          height: 50,
     },
     name: {
          fontSize: 18,
          fontWeight: "bold",
     },
     testStyle: {
          fontSize: 14,
          fontWeight: "800",
          color: "white",
          marginLeft: 10,
          marginHorizontal: 16
     },
     spacer: {
          width: '90%',
          height: 1,
          backgroundColor: "light",
          alignSelf: 'center',
     },
     bottom: {
          backgroundColor: "#e58142",
          height: 45,
          flexDirection: "row",
          width: "93%",
          justifyContent: "space-between",
          marginHorizontal: 8,
          borderRadius: 10,
          alignItems: "center",
          paddingLeft: 5,
     },
     bottomClose: {
          height: 45,
          flexDirection: "row",
          width: "93%",
          justifyContent: "space-between",
          marginHorizontal: 8,
          borderRadius: 10,
          alignItems: "center",
          paddingLeft: 5,
     },
     borderBottom: {
          borderBottomWidth: 1,
          borderBottomColor: 'white',
     },
     BottomCode: {
          position: "absolute",
          bottom: 10,
          paddingHorizontal: 20
     }
});

export default CustomDrawer;
