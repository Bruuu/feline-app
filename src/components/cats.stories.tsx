import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Cats from "./cats";

export default {
  title: "Example/Cats",
  component: Cats,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Cats>;

const Template: ComponentStory<typeof Cats> = (args) => <Cats {...args} />;

export const Default = Template.bind({});
Default.args = {};
