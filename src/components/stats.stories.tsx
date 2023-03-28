import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Stats from "./stats";

export default {
  title: "Example/Stats",
  component: Stats,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Stats>;

const Template: ComponentStory<typeof Stats> = (args) => <Stats {...args} />;

export const Default = Template.bind({});
Default.args = {};
