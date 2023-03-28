import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Timer from "./timer";

export default {
  title: "Example/Timer",
  component: Timer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

export const Default = Template.bind({});
Default.args = { max: 100 };
