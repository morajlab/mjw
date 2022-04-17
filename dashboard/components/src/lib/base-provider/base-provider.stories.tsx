import { BaseProvider } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'MJW/Dashboard/Components/BaseProvider',
  component: BaseProvider,
  argTypes: {
    children: {
      control: false,
    },
  },
} as ComponentMeta<typeof BaseProvider>;

const Template: ComponentStory<typeof BaseProvider> = (args) => (
  <BaseProvider {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  theme: {},
};
