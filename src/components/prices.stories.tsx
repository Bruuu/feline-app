import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Prices from "./prices";

export default {
  title: "Example/Prices",
  component: Prices,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Prices>;

const Template: ComponentStory<typeof Prices> = (args) => <Prices {...args} />;

export const Default = Template.bind({});
Default.args = {};
