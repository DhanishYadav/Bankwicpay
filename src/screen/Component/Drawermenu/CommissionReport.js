import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from "react-native-modal-datetime-picker";
import Moment from 'moment';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Commission = () => {
  const [isDatePickerFromVisible, setDatePickerFromVisibility] = useState(false);
  const [isDatePickerToVisible, setDatePickerToVisibility] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [payout, setPayout] = useState("");

  const onSearch = () => {
    setFromDate("")
    setToDate("")
    setPayout("123")
  }
  useEffect(() => {
    var d = new Date();
    Moment.locale('en');
    var dateFormated = Moment(d).format('DD/MM/YYYY');
    setFromDate(dateFormated);

  }, [])
  const showDatePickerFrom = () => {
    setDatePickerFromVisibility(true);
  };

  const hideDatePickerFrom = () => {
    setDatePickerFromVisibility(false);
  };

  const handleFromDate = (date) => {
    Moment.locale('en');
    var dateFormated = Moment(date).format('DD/MM/YYYY');
    setFromDate(dateFormated);
    hideDatePickerFrom();
  };

  const showDatePickerTo = () => {
    setDatePickerToVisibility(true);
  };

  const hideDatePickerTo = () => {
    setDatePickerToVisibility(false);
  };

  const handleToDate = (date) => {
    Moment.locale('en');
    var dateFormated = Moment(date).format('DD/MM/YYYY');
    setToDate(dateFormated);
    hideDatePickerTo();
  };
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.MainView}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.cardSubTitleText, { marginLeft: 10 }]}>From Date</Text>
            <Text style={[styles.cardSubTitleText, { marginLeft: 110 }]}>To Date </Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: 7 }}>
            <View style={{ width: "46%", marginLeft: 6 }}>
              <View >
                <TextInput
                  placeholder="Select Valid Date"
                  style={styles.Textinput}
                  value={fromDate}
                  cursorColor='#e58142'
                  activeOutlineColor='#e58142'
                  activeUnderlineColor='#f2612b'
                  underlineColor='#e58142'
                  textColor='#f2612b'
                  left={<TextInput.Icon icon="calendar" color="#e58142"
                    onPress={showDatePickerFrom} />}
                >
                </TextInput>
              </View>
              <DateTimePicker
                isVisible={isDatePickerFromVisible}
                mode="date"
                onConfirm={handleFromDate}
                onCancel={hideDatePickerFrom}
              />
            </View>
            <View style={{ width: "48%", marginRight: 10 }}>
              <View>
                <TextInput placeholder="Select To Date"
                  style={styles.Textinput}
                  value={toDate} cursorColor='#e58142'
                  activeOutlineColor='#e58142'
                  activeUnderlineColor='#f2612b'
                  underlineColor='#e58142'
                  textColor='#f2612b'
                  left={<TextInput.Icon icon="calendar" color="#e58142"
                    onPress={showDatePickerTo} />}
                />
              </View>
              <DateTimePicker
                isVisible={isDatePickerToVisible}
                mode="date"
                onConfirm={handleToDate}
                onCancel={hideDatePickerTo}
                pickerContainerStyle={{ backgroundColor: '#e58142' }}
              />
            </View>
          </View>
          <View style={{ marginTop: 30, marginLeft: 10 }}>
            <TouchableOpacity onPress={onSearch}>
              <Button style={{
                backgroundColor: "#e58142", marginHorizontal: 40, height: 45,
                paddingTop: 4, color: "white"
              }}>
                <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>SEARCH</Text>
              </Button>
            </TouchableOpacity>
          </View>

        </View>
        {!payout == "" && (
          <View style={styles.payout}>
            <Text style={styles.text}>Commission Balance :	₹ 10.98</Text>
          </View>
        )}

      </View>

    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  MainView: {
    backgroundColor: "white",
    height: 200,
    width: '97%',
    marginHorizontal: 6,
    marginTop: 6,
    borderRadius: 10,
    elevation: 10
  },
  Textinput: {
    fontSize: 13,
    backgroundColor: "#E3E0DE",
    width: '100%',
    height: 46,
    marginBottom: 5,
    fontWeight: "bold",
  },
  cardSubTitleText: {
    margin: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#e58142",
    marginTop: 11
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e58142",
  },
  payout: {
    height: 50,
    marginHorizontal: 6,
    borderRadius: 10,
    elevation: 11,
    backgroundColor: "white",
    marginTop: 6,
    justifyContent: "center",
    alignItems: "center",
  }
})
export default Commission