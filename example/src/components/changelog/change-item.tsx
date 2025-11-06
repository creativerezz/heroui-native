import Feather from '@expo/vector-icons/Feather';
import { View } from 'react-native';
import { AppText } from '../app-text';

type ChangeType = 'feature' | 'fix' | 'improvement' | 'docs';

type ChangeItemProps = {
  type: ChangeType;
  title: string;
  description?: string;
};

const changeTypeConfig: Record<
  ChangeType,
  { icon: string; color: string; bgColor: string; label: string }
> = {
  feature: {
    icon: 'plus-circle',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    label: 'New',
  },
  fix: {
    icon: 'check-circle',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    label: 'Fixed',
  },
  improvement: {
    icon: 'arrow-up-circle',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    label: 'Improved',
  },
  docs: {
    icon: 'file-text',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    label: 'Docs',
  },
};

export function ChangeItem({ type, title, description }: ChangeItemProps) {
  const config = changeTypeConfig[type];

  return (
    <View className="flex-row gap-3 mb-4">
      <View
        className={`size-8 rounded-full ${config.bgColor} items-center justify-center mt-0.5`}
      >
        <Feather name={config.icon as any} size={16} className={config.color} />
      </View>
      <View className="flex-1">
        <View className="flex-row items-center gap-2 mb-1">
          <AppText className="text-sm font-semibold text-foreground">
            {title}
          </AppText>
          <View className={`px-2 py-0.5 rounded ${config.bgColor}`}>
            <AppText className={`text-xs font-medium ${config.color}`}>
              {config.label}
            </AppText>
          </View>
        </View>
        {description && (
          <AppText className="text-sm text-muted leading-5">
            {description}
          </AppText>
        )}
      </View>
    </View>
  );
}
