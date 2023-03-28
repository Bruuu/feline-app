import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Faq from "./faq";

export default {
  title: "Example/Faq",
  component: Faq,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Faq>;

const Template: ComponentStory<typeof Faq> = (args) => <Faq {...args} />;

export const Default = Template.bind({});
Default.args = {};
