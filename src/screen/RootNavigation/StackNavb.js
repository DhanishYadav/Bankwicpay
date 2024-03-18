import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawernab from './Drawernab';
import Onboarding from '../Component/Onboarding';
import Register from '../Component/Register';
import ProfileSetting from '../BottomNavMenu/ProfileSetting';
import CallUs from '../BottomNavMenu/CallUs';
import ScanOR from '../BottomNavMenu/ScanOR';
import Discover from '../BottomNavMenu/Discover';
import Services from '../BottomNavMenu/Services';
import SendMoney from '../Component/OnBoardingScreen/SendMoney';
import BillPayRecharge from '../Component/OnBoardingScreen/BillPayRecharge';
import PreApproved from '../Component/OnBoardingScreen/PreApproved';
import LoansScreen from '../Component/OnBoardingScreen/LoansScreen';
import AccountFD from '../Component/OnBoardingScreen/AccountFD';
import CardForex from '../Component/OnBoardingScreen/CardForex';
import MutualFunds from '../Component/OnBoardingScreen/MutualFunds';
import UpiPayment from '../Component/OnBoardingScreen/UpiPayment';
import FasTag from '../Component/OnBoardingScreen/FasTag';
import BillersList from '../Component/BillersList';
import RequestRefund from "../Component/RequestReport";
import AddPayout from '../Component/Payout';
import SignMobileScreen from '../Component/SignUP/SignMobileScreen';
import OtpScreen from '../Component/SignUP/OtpScreen';
import PanScreen from '../Component/SignUP/PanScreen';
import PanImageScreen from '../Component/SignUP/PanImageScreen';
import LoginTesting from '../Component/LoginTesting';
import AdharScreen from '../Component/SignUP/AdharScreen';
import AdharOtpScreen from '../Component/SignUP/AdharOtpScreen';
import AdharImageScreen from '../Component/SignUP/AdharImageScreen';
import SignUpDetails from '../Component/SignUP/SignupDetails';
import SelfiScreen from "../Component/SignUP/SelfiScreen";
import CongratScreen from '../Component/SignUP/CongratScreen';
import ForgetMobileScreen from '../Component/SignUP/ForgetMobile';
import ForgetOtpScreen from '../Component/SignUP/ForgetOtpScreen';
import PasswordScreen from '../Component/SignUP/PasswordScreen';
import AddCommission from '../Component/AddCommission';
import PayoutReport from '../Component/PayoutReport';
import HotelScreen from '../Component/HotelScreen';
import BusScreen from '../Component/BusScreen';
import FlightScreen from '../Component/FlightScreen';
const Stack = createNativeStackNavigator();
const StackNavb = () => {
  return (
    <>
      <Stack.Navigator initialRouteName='OnBorading'>
        <Stack.Screen name="OnBorading" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Drawernab" component={Drawernab} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
        <Stack.Screen name="LoginTesting" component={LoginTesting} options={{ headerShown: false }} />
        <Stack.Screen name="SignMobileScreen" component={SignMobileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PanScreen" component={PanScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AdharScreen" component={AdharScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AdharOtpScreen" component={AdharOtpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AdharImageScreen" component={AdharImageScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PanImageScreen" component={PanImageScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpDetails" component={SignUpDetails} options={{ headerShown: false }} />
        <Stack.Screen name="SelfiScreen" component={SelfiScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CongratScreen" component={CongratScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetMobileScreen" component={ForgetMobileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetOtpScreen" component={ForgetOtpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="HotelScreen" component={HotelScreen} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: "      Hotel",
        }} />
        <Stack.Screen name="BusScreen" component={BusScreen} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: "      Bus",
        }} />
        <Stack.Screen name="FlightScreen" component={FlightScreen} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: "      Flight",
        }} />
        <Stack.Screen name="AddCommission" component={AddCommission} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: "      Add-Commission ",
        }} />
        <Stack.Screen name="PayoutReport" component={PayoutReport} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: "           Payout-Report ",
        }} />
        <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
        <Stack.Screen name="CallUs" component={CallUs} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: " Call Us ",
        }} />
        <Stack.Screen name="ScanOR" component={ScanOR} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: "      Ledger ",
        }} />
        <Stack.Screen name="Discover" component={Discover} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: "    Search Text   ",
        }} />
        <Stack.Screen name="Services" component={Services}
          options={{
            headerStyle: {
              backgroundColor: '#e58142'
            },
            headerTintColor: 'white',
            headerTitle: " Refund ",
          }}
        />
        <Stack.Screen name="BillList" component={BillersList}
          options={{
            headerStyle: {
              backgroundColor: '#e58142'
            },
            headerTintColor: 'white',
            headerTitle: " Refund ",
          }}
        />
        <Stack.Screen name="SendMoney" component={SendMoney} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: " Refund ",
        }} />
        <Stack.Screen name="Mobile" component={BillPayRecharge} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: " Mobile  Recharge",
        }} />
        <Stack.Screen name="PreApproved" component={PreApproved} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: "AEPS ",
        }} />
        <Stack.Screen name="AddPayout" component={AddPayout} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: " Add Payout ",
        }} />
        <Stack.Screen name="LoansScreen" component={LoansScreen} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: " Beneficiary Screen ",
        }} />
        <Stack.Screen name="AccountFD" component={AccountFD} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: "    Request  ",
        }} />
        <Stack.Screen name="RequestRefund" component={RequestRefund} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: "    Request Refund  ",
        }} />
        <Stack.Screen name="CardForex" component={CardForex} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: " Refund Request ",
        }} />
        <Stack.Screen name="MutualFunds" component={MutualFunds} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: "  UPI Collect ",
        }} />
        <Stack.Screen name="UpiPayment" component={UpiPayment} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: " Refund ",
        }} />
        <Stack.Screen name="FasTag" component={FasTag} options={{
          headerStyle: {
            backgroundColor: '#e58142'
          },
          headerTintColor: 'white',
          headerTitle: " CC Pay ",
        }} />
      </Stack.Navigator>
    </>
  )
}

export default StackNavb