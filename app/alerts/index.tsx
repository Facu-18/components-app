import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Alert, StyleSheet } from 'react-native';
import { SafeAreaProvider, } from 'react-native-safe-area-context';

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <SafeAreaProvider>
      <ThemedView margin>
        <ThemedButton className='my-5' onPress={createTwoButtonAlert}>Alerta de 2 Opciones</ThemedButton>
        <ThemedButton className='my-5' onPress={createThreeButtonAlert}>Alerta de 3 Opciones</ThemedButton>
      </ThemedView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default AlertsScreen;