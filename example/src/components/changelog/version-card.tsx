import Feather from '@expo/vector-icons/Feather';
import { Card } from 'heroui-native';
import type { FC } from 'react';
import { View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import type { ChangelogEntry } from '../../data/changelog';
import { AppText } from '../app-text';
import { ChangeItem } from './change-item';

type VersionCardProps = {
  entry: ChangelogEntry;
  index: number;
};

export const VersionCard: FC<VersionCardProps> = ({ entry, index }) => {
  const isUnreleased = entry.version === 'Unreleased';

  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 100)
        .springify()}
    >
      <Card className="mb-4 border border-border">
        <Card.Header className="pb-3">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              {isUnreleased ? (
                <View className="size-10 rounded-full bg-emerald-500/10 items-center justify-center">
                  <Feather name="zap" size={20} color="#10b981" />
                </View>
              ) : (
                <View className="size-10 rounded-full bg-accent/10 items-center justify-center">
                  <Feather name="package" size={20} className="text-accent" />
                </View>
              )}
              <View>
                <View className="flex-row items-center gap-2">
                  <AppText className="text-lg font-bold text-foreground">
                    {entry.version}
                  </AppText>
                  {isUnreleased && (
                    <View className="px-2 py-0.5 rounded-full bg-emerald-500/10">
                      <AppText className="text-xs font-semibold text-emerald-500">
                        Coming Soon
                      </AppText>
                    </View>
                  )}
                </View>
                <AppText className="text-sm text-muted">{entry.date}</AppText>
              </View>
            </View>
          </View>
        </Card.Header>

        <Card.Body className="pt-0">
          {entry.changes.map((change, idx) => (
            <ChangeItem
              key={idx}
              type={change.type}
              title={change.title}
              description={change.description}
            />
          ))}
        </Card.Body>
      </Card>
    </Animated.View>
  );
};
