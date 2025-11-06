export type ChangelogEntry = {
  version: string;
  date: string;
  changes: {
    type: 'feature' | 'fix' | 'improvement' | 'docs';
    title: string;
    description?: string;
  }[];
};

export const changelogData: ChangelogEntry[] = [
  {
    version: 'Unreleased',
    date: 'November 6, 2025',
    changes: [
      {
        type: 'feature',
        title: 'iOS Native Support',
        description:
          'Added complete iOS project setup for both library and example app with Xcode configuration',
      },
      {
        type: 'feature',
        title: 'EAS Build Configuration',
        description:
          'Integrated EAS build system with eas.json for streamlined app deployment',
      },
      {
        type: 'improvement',
        title: 'Enhanced Navigation',
        description:
          'Updated example app with improved navigation layouts for Components and Themes routes',
      },
      {
        type: 'docs',
        title: 'Documentation Updates',
        description: 'Added WARP.md and comprehensive component documentation',
      },
    ],
  },
  {
    version: '1.0.0-beta.1',
    date: 'November 4, 2025',
    changes: [
      {
        type: 'feature',
        title: 'Uniwind Integration',
        description:
          'Initial setup of uniwind theming system with custom theme support',
      },
      {
        type: 'improvement',
        title: 'Theme Management',
        description:
          'Enhanced theme toggle functionality with improved color variables',
      },
      {
        type: 'fix',
        title: 'Example App Fixes',
        description:
          'Resolved Android layout issues and showcase layout problems',
      },
    ],
  },
  {
    version: '1.0.0-alpha.16',
    date: 'October 28, 2025',
    changes: [
      {
        type: 'feature',
        title: 'Tabs Component',
        description:
          'Added fully featured tabs component with line variant and scrollable support',
      },
      {
        type: 'feature',
        title: 'Raycast Showcase',
        description: 'Implemented model-select showcase components',
      },
      {
        type: 'improvement',
        title: 'Popover & Select',
        description:
          'Improved content width handling for better responsiveness',
      },
    ],
  },
];
