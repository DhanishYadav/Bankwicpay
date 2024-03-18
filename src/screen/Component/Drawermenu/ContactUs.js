import React, { useState, useEffect } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const RazorpayQRCodeGenerator = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState(null);

  useEffect(() => {
    generateQRCode();
  }, []);

  const generateQRCode = async () => {
    const razorpayApiKey = 'rzp_test_dlhfRGHdDN9Xvf';
    const base64ApiKey = btoa(`${razorpayApiKey}:`);
    const qrCodeData = {
      amount: 100, // Amount in paise
      currency: 'INR', // Currency code
      notes: {
        merchant_order_id: 'pay_NfUlStKOWOq8VT', // Your order ID
      },
    };
    try {
      const response = await fetch('https://api.razorpay.com/v1/checkout/qr_code',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${base64ApiKey}`,
        },
        body: JSON.stringify(qrCodeData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate QR code');
      }
      const qrCodeResponse = await response.json();
      setQrCodeUrl(qrCodeResponse.qr_image);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };
  console.log(qrCodeUrl)
  const handlePayment = () => {
    // Handle payment logic using Razorpay Checkout here
    RazorpayCheckout.open({
      amount: 100, // Amount in paise
      currency: 'INR',
      order_id: 'pay_NfUlStKOWOq8VT',
      key: 'rzp_test_dlhfRGHdDN9Xvf',
      name: 'Your App Name',
      description: 'Payment for Your Product',
      prefill: {
        email: 'user@example.com',
        contact: '9999999999',
      },
      theme: { color: '#3399cc' },
    });
  };

  return (
    <View style={styles.container}>
      {qrCodeUrl && <Image source={{ uri: qrCodeUrl }} style={styles.qrCodeImage} />}
      <Button title="Pay Now" onPress={handlePayment} disabled={!qrCodeUrl} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrCodeImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default RazorpayQRCodeGenerator;
