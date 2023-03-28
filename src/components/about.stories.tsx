import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import About from "./about";

export default {
  title: "Example/About",
  component: About,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {};
