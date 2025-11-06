import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { AppText } from '../../components/app-text';
import { VersionCard } from '../../components/changelog/version-card';
import { ScreenScrollView } from '../../components/screen-scroll-view';
import { useAppTheme } from '../../contexts/app-theme-context';
import { changelogData } from '../../data/changelog';

export default function ChangelogScreen() {
  const { isDark } = useAppTheme();

  return (
    <>
      <ScreenScrollView>
        <View className="pt-8 pb-4">
          <View className="mb-6">
            <AppText className="text-3xl font-bold text-foreground mb-2">
              What's New
            </AppText>
            <AppText className="text-base text-muted">
              Stay updated with the latest features, improvements, and fixes
            </AppText>
          </View>

          {changelogData.map((entry, index) => (
            <VersionCard key={entry.version} entry={entry} index={index} />
          ))}
        </View>
      </ScreenScrollView>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </>
  );
}
