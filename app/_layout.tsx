import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';

import 'react-native-reanimated';

import { allRoutes } from '@/constants/Routes';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';

import '../global.css';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: backgroundColor,
          },
          headerStyle: {
            backgroundColor: backgroundColor,
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Inicio' }} />

        {
          allRoutes.map(route => (
            <Stack.Screen
              key={route.name}
              name= {route.name}
              options={{
                title: route.title
              }}
            />
          ))
        }

      </Stack>
    </ThemeProvider>
  );
}
