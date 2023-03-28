import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Features from "./features";

export default {
  title: "Example/Features",
  component: Features,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Features>;

const Template: ComponentStory<typeof Features> = (args) => (
  <Features {...args} />
);

export const Default = Template.bind({});
Default.args = {};
