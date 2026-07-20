import { useThemeChangerContext } from '@/presentation/context/ThemedChangerContext';
import ThemeCard from '@/presentation/shared/ThemeCard';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemeSwitch from '@/presentation/shared/ThemeSwitch';
import { useState } from 'react';

const ThemesScreen = () => {

  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } = useThemeChangerContext();

  //const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === 'dark',
    systemMode: isSystemTheme
  })

  const setDarkMode = (value: boolean) => {

    //setColorScheme(value ? 'dark' : 'light')
    toggleTheme();

    setDarkModeSettings({
      darkMode: value,
      systemMode: false
    })
  }

  const setSystemMode = (value: boolean) => {

    if (value) {
      setSystemTheme()
    }
    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value
    })
  }

  return (
    <ThemedView>
      <ThemeCard className='mt-5'>
        <ThemeSwitch
          text='Dark Mode'
          className='mb-5'
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />

        <ThemeSwitch
          text='System Mode'
          className='mb-5'
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemeCard>
    </ThemedView>
  );
};
export default ThemesScreen;
