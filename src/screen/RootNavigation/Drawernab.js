import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Component/Drawermenu/HomeScreen';
import ApplyNow from '../Component/Drawermenu/ApplyNow';
import PassBook from '../Component/Drawermenu/PassBook';
import ContactUs from '../Component/Drawermenu/ContactUs';
import Calculator from '../Component/Drawermenu/Calculator';
import Reciepts from '../Component/Drawermenu/Reciepts';
import SafetyTips from '../Component/Drawermenu/SafetyTips';
import ChangeLoginPin from '../Component/Drawermenu/ChangeLoginPin';
import AppPermission from '../Component/Drawermenu/AppPermission';
import RateUs from '../Component/Drawermenu/RateUs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomDrawer from './CustomDrawer';
import { Searchbar } from 'react-native-paper';
import CommissionReport from '../Component/Drawermenu/CommissionReport';
//import StyleSheet from '../Constant/StyleSheet';
const Drawer = createDrawerNavigator();
const Drawernab = () => {
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          activeBackgroundColor: '#ff6666',
          activeTintColor: '#ffffff', // white
          inactiveBackgroundColor: '#ffffff', // white
          inactiveTintColor: '#ff0000', // red
          labelStyle: {
            fontSize: 20,
            fontWeight: 'bold', // Increase font weight for better visibility
          },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTitleStyle: {
            color: 'white',
            marginLeft: 'auto', // Align to the left
            marginRight: 'auto', // Align to the right
            justifyContent: 'center', // Center vertically
            alignItems: 'center', // Center horizontally
          }, headerTitleStyle: {
            color: 'white',
            marginLeft: 60,
          },
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
          drawerLabelStyle: {
            color: 'white', // Set color to white
            fontSize: 15, // Adjust font size if needed
            fontWeight: "bold", // Adjust font weight if needed
          },
        }} />
        <Drawer.Screen name="UPI Payout" component={ApplyNow} options={{
          headerStyle: {
            backgroundColor: '#e58142',
          },
          headerTitleStyle: {
            color: 'white',
            marginLeft: 'auto', // Align to the left
            marginRight: 'auto', // Align to the right
            justifyContent: 'center', // Center vertically
            alignItems: 'center', // Center horizontally

          }, headerTitleStyle: {
            color: 'white',
            marginLeft: 60,
          },
          headerTintColor: 'white',
          drawerLabelStyle: {
            color: 'white', // Set color to white
            fontSize: 15, // Adjust font size if needed
            fontWeight: "bold", // Adjust font weight if needed
          },
          headerTitle: "Search UPI Sender",
        }} />
        <Drawer.Screen name="Fund Transfer" component={PassBook} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTitleStyle: {
            color: 'white',
            marginLeft: 'auto', // Align to the left
            marginRight: 'auto', // Align to the right
            justifyContent: 'center', // Center vertically
            alignItems: 'center', // Center horizontally
          }, headerTitleStyle: {
            color: 'white',
            marginLeft: 60,
          },
          headerTintColor: 'white',
          headerTitle: "Fund Transfer",
          drawerLabelStyle: {
            color: 'white', // Set color to white
            fontSize: 15, // Adjust font size if needed
            fontWeight: "bold", // Adjust font weight if needed
          },
        }} />
        <Drawer.Screen name="AEPS" component={ContactUs} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTitleStyle: {
            color: 'white',
            marginLeft: 'auto', // Align to the left
            marginRight: 'auto', // Align to the right
            justifyContent: 'center', // Center vertically
            alignItems: 'center', // Center horizontally
          }, headerTitleStyle: {
            color: 'white',
            marginLeft: 60,
          },
          headerTintColor: 'white',
          headerTitle: "AEPS",
          drawerLabelStyle: {
            color: 'white', // Set color to white
            fontSize: 15, // Adjust font size if needed
            fontWeight: "bold", // Adjust font weight if needed
          },
        }} />
        <Drawer.Screen name="UPI Collect" component={Calculator} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTitleStyle: {
            color: 'white',
            marginLeft: 'auto', // Align to the left
            marginRight: 'auto', // Align to the right
            justifyContent: 'center', // Center vertically
            alignItems: 'center', // Center horizontally
          }, headerTitleStyle: {
            color: 'white',
            marginLeft: 60,
          },
          headerTintColor: 'white',
          headerTitle: "UPI Collect",
          drawerLabelStyle: {
            color: 'white', // Set color to white
            fontSize: 15, // Adjust font size if needed
            fontWeight: "bold", // Adjust font weight if needed
          },
        }} />
        <Drawer.Screen name="Micro ATM / M-Pos" component={Reciepts} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTitleStyle: {
            color: 'white',
            marginLeft: 'auto', // Align to the left
            marginRight: 'auto', // Align to the right
            justifyContent: 'center', // Center vertically
            alignItems: 'center', // Center horizontally
          }, headerTitleStyle: {
            color: 'white',
            marginLeft: 60,
          },
          headerTintColor: 'white',
          headerTitle: "Micro ATM / M-Pos",
          drawerLabelStyle: {
            color: 'white', // Set color to white
            fontSize: 15, // Adjust font size if needed
            fontWeight: "bold", // Adjust font weight if needed
          },
        }} />
        <Drawer.Screen name="Bill Payments" component={SafetyTips} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTitleStyle: {
            color: 'white',
            marginLeft: 'auto', // Align to the left
            marginRight: 'auto', // Align to the right
            justifyContent: 'center', // Center vertically
            alignItems: 'center', // Center horizontally
          }, headerTitleStyle: {
            color: 'white',
            marginLeft: 60,
          },
          headerTintColor: 'white',
          headerTitle: "Bill Payments",
          drawerLabelStyle: {
            color: 'white', // Set color to white
            fontSize: 15, // Adjust font size if needed
            fontWeight: "bold", // Adjust font weight if needed
          },
        }} />
        <Drawer.Screen name="Mobile Recharge" component={ChangeLoginPin}
          options={{
            headerStyle: {
              backgroundColor: '#e58142'
            },
            headerTitleStyle: {
              color: 'white',
              marginLeft: 'auto', // Align to the left
              marginRight: 'auto', // Align to the right
              justifyContent: 'center', // Center vertically
              alignItems: 'center', // Center horizontally
            }, headerTitleStyle: {
              color: 'white',
              marginLeft: 30,
            },
            headerTintColor: 'white',
            headerTitle: "Mobile Recharge",
            drawerLabelStyle: {
              color: 'white', // Set color to white
              fontSize: 15, // Adjust font size if needed
              fontWeight: "bold", // Adjust font weight if needed
            },
          }}
        />
        <Drawer.Screen name="DTH Recharge" component={AppPermission}
          options={{
            headerStyle: {
              backgroundColor: '#e58142'
            },
            headerTitleStyle: {
              color: 'white',
              marginLeft: 'auto', // Align to the left
              marginRight: 'auto', // Align to the right
              justifyContent: 'center', // Center vertically
              alignItems: 'center', // Center horizontally
            }, headerTitleStyle: {
              color: 'white',
              marginLeft: 60,
            },
            headerTintColor: 'white',
            headerTitle: "DTH Recharge",
            drawerLabelStyle: {
              color: 'white', // Set color to white
              fontSize: 15, // Adjust font size if needed
              fontWeight: "bold", // Adjust font weight if needed
            },
          }}
        />
        <Drawer.Screen name="Balance Request" component={RateUs} options={{
          headerStyle: {
            backgroundColor: '#e58142',
          },
          headerTitleStyle: {
            color: 'white',
            marginLeft: 'auto', // Align to the left
            marginRight: 'auto', // Align to the right
            justifyContent: 'center', // Center vertically
            alignItems: 'center', // Center horizontally
          }, headerTitleStyle: {
            color: 'white',
            marginLeft: 60,
          },
          headerTintColor: 'white',
          headerTitle: "Balance Request",
          drawerLabelStyle: {
            color: 'white', // Set color to white
            fontSize: 15, // Adjust font size if needed
            fontWeight: "bold", // Adjust font weight if needed
          },
        }} />
        <Drawer.Screen name="Commission Report" component={CommissionReport} options={{
          headerStyle: {
            backgroundColor: '#e58142',
          },
          headerTitleStyle: {
            color: 'white',
            marginLeft: 'auto', // Align to the left
            marginRight: 'auto', // Align to the right
            justifyContent: 'center', // Center vertically
            alignItems: 'center', // Center horizontally
          }, headerTitleStyle: {
            color: 'white',
            marginLeft: 60,
          },
          headerTintColor: 'white',
          headerTitle: "Commission Report",
          drawerLabelStyle: {
            color: 'white', // Set color to white
            fontSize: 15, // Adjust font size if needed
            fontWeight: "bold", // Adjust font weight if needed
          },
        }} />

      </Drawer.Navigator>
    </>
  )
}
const CustomHeader = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const toggleDrawer = () => {
    navigation.toggleDrawer(); // This will open/close the drawer
  };
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, justifyContent: "space-between", backgroundColor: "#d17029", paddingHorizontal: 8 }}>
      {/* Search bar */}
      <TouchableOpacity onPress={toggleDrawer} >
        <AntDesign name="menuunfold" size={25} color="white" />
      </TouchableOpacity>
      <Searchbar
        // placeholder="Search Details"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
        cursorColor={"#d17029"}
      />

      {/* Notifications icon */}
      <TouchableOpacity >
        <AntDesign name="bells" size={25} color="white" />
      </TouchableOpacity>

      {/* Logout button */}
      <TouchableOpacity >
        <AntDesign name="logout" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  searchbar: {
    height: "80%",
    width: "60%",
    borderRadius: 20,
    backgroundColor: "white",
    textAlign: 'center',
    padding: 0
  }
})
export default Drawernab