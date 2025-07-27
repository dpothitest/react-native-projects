import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text> Home</Text>
      <Link href={'/login'} className="h-5 w-20 rounded bg-cyan-500 text-center">
        Login
      </Link>
    </View>
  );
}
