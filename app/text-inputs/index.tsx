import ThemeCard from '@/presentation/shared/ThemeCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const TextInputsScreen = () => {

  const isIOS = Platform.OS === 'ios';


  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (
    <KeyboardAvoidingView
      behavior={ isIOS ? 'height': undefined }
    >
      <ScrollView>
        <ThemedView margin>
          <ThemeCard className='mb-5'>
            <ThemedTextInput
              placeholder='Nombre Completo'
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />

            <ThemedTextInput
              placeholder='Correo Electronico'
              autoCapitalize={'words'}
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

            <ThemedTextInput
              placeholder='Télefono'
              autoCapitalize={'words'}
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

          </ThemeCard>

          <ThemeCard className='my-2'>
            <ThemedText className='dark:text-white'>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className='my-2'>
            <ThemedText className='dark:text-white'>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className='my-2'>
            <ThemedText className='dark:text-white'>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className='my-2'>
            <ThemedText className='dark:text-white'>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className='my-2'>
            <ThemedText className='dark:text-white'>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className='my-2'>
            <ThemedText className='dark:text-white'>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className='my-2'>
            <ThemedText className='dark:text-white'>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>

          <ThemeCard style={{
            marginBottom: isIOS ? 100 : 10
          }}>
            <ThemedTextInput
              placeholder='Nombre Completo'
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
          </ThemeCard>


        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>


  );
};
export default TextInputsScreen;
