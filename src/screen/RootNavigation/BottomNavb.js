import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const BottomNav = () => {
     const navigation = useNavigation();
     return (
          <>
               <View style={styles.bottom}>
                    <TouchableOpacity onPress={() => {
                         navigation.navigate("Home")
                    }}>
                         <View style={styles.bottomMenu}>
                              <MaterialCommunityIcons name="home" size={38} color={"#eb8f46"} />
                              <Text style={styles.testStyle}>Home</Text>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                         navigation.navigate("CallUs")
                    }}>
                         <View style={styles.bottomMenu}>
                              <MaterialCommunityIcons name="cash-refund" size={38} color={"#eb8f46"} />
                              <Text style={styles.testStyle}>Refund</Text>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                         navigation.navigate("ScanOR")
                    }}>
                         <View style={styles.bottomMenu}>
                              <MaterialCommunityIcons name="chemical-weapon" size={38} color={"#eb8f46"} />
                              <Text style={styles.testStyle}>Ledger</Text>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                         navigation.navigate("Discover")
                    }}>
                         <View style={styles.bottomMenu}>
                              <MaterialCommunityIcons name="text-search" size={38} color={"#eb8f46"} />
                              <Text style={styles.testStyle}>Search Txn</Text>
                         </View>
                    </TouchableOpacity>
               </View>
          </>
     )
}
const styles = StyleSheet.create({
     bottom: {
          position: "absolute",
          bottom: 0,
          height: 60,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          backgroundColor: "#F7EEE6",
          borderTopWidth: 2,
          borderTopColor: "gray",
          paddingTop: 1,
          paddingBottom: 3

     },
     testStyle: {
          fontSize: 14,
          fontWeight: "500",
          color: "gray"
     },
     IconStyle: {
          fontSize: 13,
          fontWeight: "700",
          color: "white",
          textAlign: "center",
          // marginTop: 5
     },
     bottomMenu: {
          // marginTop: 5,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center"
     }
})
export default BottomNav