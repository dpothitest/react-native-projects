import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      {/* hide headers */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
