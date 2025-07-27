import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  const isAuth = false;
  return (
    <Stack>
      {/* hide headers */}
      <Stack.Protected guard={isAuth}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isAuth}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
