import { Taskbar } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'MJW/Dashboard/Components/Taskbar',
  component: Taskbar,
} as ComponentMeta<typeof Taskbar>;

const Template: ComponentStory<typeof Taskbar> = (args) => (
  <Taskbar {...args} />
);

export const Primary = Template.bind({});
