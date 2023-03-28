import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContactUs from "./contactUs";

export default {
  title: "Example/ContactUs",
  component: ContactUs,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ContactUs>;

const Template: ComponentStory<typeof ContactUs> = (args) => (
  <ContactUs {...args} />
);

export const Default = Template.bind({});
Default.args = {};
