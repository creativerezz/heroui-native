import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';
import { useThemeColor } from 'heroui-native';
import { useCallback } from 'react';
import { Image, Platform, StyleSheet } from 'react-native';
import LogoDark from '../../../assets/logo-dark.png';
import LogoLight from '../../../assets/logo-light.png';
import { ThemeToggle } from '../../components/theme-toggle';
import { useAppTheme } from '../../contexts/app-theme-context';

export default function Layout() {
  const { isDark } = useAppTheme();
  const themeColorForeground = useThemeColor('foreground');
  const themeColorBackground = useThemeColor('background');

  const _renderTitle = () => {
    return (
      <Image
        source={isDark ? LogoLight : LogoDark}
        style={styles.logo}
        resizeMode="contain"
      />
    );
  };

  const _renderThemeToggle = useCallback(() => <ThemeToggle />, []);

  return (
    <Tabs
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
        headerRight: _renderThemeToggle,
        tabBarStyle: {
          backgroundColor: themeColorBackground,
          borderTopColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
        },
        tabBarActiveTintColor: themeColorForeground,
        tabBarInactiveTintColor: isDark
          ? 'rgba(255,255,255,0.4)'
          : 'rgba(0,0,0,0.4)',
        contentStyle: {
          backgroundColor: themeColorBackground,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: _renderTitle,
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="components"
        options={{
          headerTitle: 'Components',
          title: 'Components',
          tabBarIcon: ({ color, size }) => (
            <Feather name="grid" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="themes"
        options={{
          headerTitle: 'Themes',
          title: 'Themes',
          tabBarIcon: ({ color, size }) => (
            <Feather name="droplet" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="showcases"
        options={{
          headerShown: false,
          title: 'Showcases',
          tabBarIcon: ({ color, size }) => (
            <Feather name="star" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="changelog"
        options={{
          headerTitle: "What's New",
          title: 'Changelog',
          tabBarIcon: ({ color, size }) => (
            <Feather name="bell" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 24,
  },
});
