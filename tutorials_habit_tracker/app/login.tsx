import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import React, { useState } from 'react';

export default function Login() {
  const [isSignUp, setIsSignedUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>('');
  const theme = useTheme();
  const handleAuth = () => {
    console.log('Auth handle triggered');
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }
    if (password.length < 6) {
      setError('Password length does not satisfy the min requirements');
    }
    setError(null);
  };
  const handleSwitchMode = async () => {
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
          onChangeText={setEmail}
        />
        <TextInput
          label={'password'}
          autoCapitalize="none"
          keyboardType="email-address"
          mode="outlined"
          className={styles.textInput}
          onChangeText={setPassword}
        />
        <Button
          mode="contained"
          className={styles.button}
          style={{ marginTop: 10 }}
          onPress={handleAuth}>
          {isSignUp ? 'Sign Up' : 'Login'}
        </Button>
        {error ? <Text style={{ color: theme.colors.error }}>{error}</Text> : ''}
        <Button mode="text" onPress={handleSwitchMode}>
          {isSignUp ? 'Aleady have an account? Sign In' : 'Dont have an account? Sign up'}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
