import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Searchbar } from 'react-native-paper'; // Import Searchbar from react-native-paper
import { SafeAreaProvider } from 'react-native-safe-area-context';
const BillersList = () => {
     const [searchText, setSearchText] = useState('');
     const [data, setData] = useState([
          'Apple',
          'Banana',
          'Cherry',
          'Date',
          'Fig',
          'Grapes',
          'Lemon',
          'Mango',
          'Orange',
          'Peach',
          'Pear',
          'Pineapple',
          'Strawberry',
          'Watermelon',
     ]);

     const filteredData = data.filter((item) =>
          item.toLowerCase().includes(searchText.toLowerCase())
     );

     return (
          <SafeAreaProvider>
               <View style={styles.container}>
                    {/* Replace TextInput with Searchbar */}
                    <Searchbar
                         style={styles.textInput}
                         placeholder="Search here...."
                         onChangeText={(text) => setSearchText(text)}
                         value={searchText}
                         cursorColor={color = "#e58142"}
                    />
                    {searchText ? (
                         <FlatList
                              data={filteredData}
                              keyExtractor={(item, index) => index.toString()}
                              renderItem={({ item }) => (
                                   <TouchableOpacity>
                                        <View style={styles.data}>
                                             <Text style={styles.text}>{item}</Text>
                                        </View>
                                   </TouchableOpacity>
                              )}
                         />
                    ) : null}
               </View>
          </SafeAreaProvider>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     textInput: {
          margin: 10,
          backgroundColor: 'white',
          color: '#5DADE2',
     },
     data: {
          backgroundColor: 'white',
          height: 50,
          width: '96%',
          marginHorizontal: 10,
          borderRadius: 10,
          marginVertical: 2,
          justifyContent: 'center',
     },
     text: {
          fontSize: 14,
          fontWeight: 'bold',
          color: 'gray',
          marginLeft: 10,
     },
});

export default BillersList;
