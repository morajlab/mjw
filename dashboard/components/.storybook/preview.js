import { BaseProvider } from '@workspace/mjw/dashboard/components';
import { theme } from '@workspace/mjw/dashboard/theme';

export * from '../../../../../.storybook/preview';
export const decorators = [
  (Story) => (
    <BaseProvider theme={theme}>
      <Story />
    </BaseProvider>
  ),
];
