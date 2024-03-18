import React from 'react';
import { View, Button } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const openRazorpay = async () => {
    const options = {
      description: 'Payment for product XYZ',
      image: 'https://your-company.com/logo.png',
      currency: 'INR',
      key: 'rzp_test_dlhfRGHdDN9Xvf', // Your Razorpay API key
      amount: '10000', // Amount in the smallest currency unit (e.g., paise in INR)
      name: 'Your Company',
      prefill: {
        email: '78900000dhanish@gmail.com',
        contact: '8303730327',
        name: 'Dhanish Yadav'
      },
      theme: { color: '#F37254' } // Theme color
    };

    try {
      const data = await RazorpayCheckout.open(options);
      console.log(data); // Payment success data
    } catch (error) {
      console.log('Error:', error);
      if (error.code === 3) {
        console.log('Authentication failed:', error.description);
      } else {
        console.log('Payment failed:', error);
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pay with Razorpay" onPress={openRazorpay} />
    </View>
  );
};

export default App;
