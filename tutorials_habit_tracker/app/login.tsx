import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import React, { useState } from 'react';

export default function Login() {
  const [isSignUp, setIsSignedUp] = useState(false);
  const handleSwitchMode = () => {
    setIsSignedUp((prev) => !isSignUp);
  };
  const styles = {
    container: 'flex-1 bg-[#f5f5f5] items-center justify-center',
    content: 'flex-1 justify-center p-4',
    text: 'mb-4 text-center',
    textInput: 'mb-4',
    button: 'mt-4',
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className={styles.container + ''}>
      <View className={styles.content}>
        <Text className={styles.text} variant="headlineMedium">
          {isSignUp ? 'SignUp' : 'Welcome Back'}
        </Text>
        <TextInput
          label={'email'}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@gmail.com"
          mode="outlined"
          className={styles.textInput}
        />
        <TextInput
          label={'password'}
          autoCapitalize="none"
          keyboardType="email-address"
          mode="outlined"
          className={styles.textInput}
        />
        <Button mode="contained" className={styles.button} style={{ marginTop: 10 }}>
          {isSignUp ? 'Sign Up' : 'Login'}
        </Button>
        <Button mode="text" onPress={handleSwitchMode}>
          {isSignUp ? 'Aleady have an account? Sign In' : 'Dont have an account? Sign up'}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
