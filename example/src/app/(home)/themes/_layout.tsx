import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { Stack } from 'expo-router';
import { useThemeColor } from 'heroui-native';
import { Platform } from 'react-native';
import { useAppTheme } from '../../../contexts/app-theme-context';

export default function ThemesLayout() {
  const { isDark } = useAppTheme();
  const themeColorForeground = useThemeColor('foreground');
  const themeColorBackground = useThemeColor('background');

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerBlurEffect: isDark ? 'dark' : 'light',
        headerTintColor: themeColorForeground,
        headerStyle: {
          backgroundColor: Platform.select({
            ios: undefined,
            android: themeColorBackground,
          }),
        },
        headerTitleStyle: {
          fontFamily: 'Inter_600SemiBold',
        },
        headerBackButtonDisplayMode: 'generic',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        fullScreenGestureEnabled: isLiquidGlassAvailable() ? false : true,
        contentStyle: {
          backgroundColor: themeColorBackground,
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
