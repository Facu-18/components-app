import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import 'react-native-reanimated';

import { allRoutes } from '@/constants/Routes';
import { useThemeColor } from '@/hooks/use-theme-color';

import { ThemeChangerProvider } from '@/presentation/context/ThemedChangerContext';
import '../global.css';

export default function RootLayout() {

  const backgroundColor = useThemeColor({}, 'background');

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeChangerProvider>
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
                name={route.name}
                options={{
                  title: route.title,
                  headerShown: !route.title.includes('Slides'),
                }}
              />
            ))
          }
        </Stack>
      </ThemeChangerProvider>
    </GestureHandlerRootView >
  );
}
