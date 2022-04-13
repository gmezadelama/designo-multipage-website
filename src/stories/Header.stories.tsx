import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "../components/header/Header";

export default {
  title: "Designo/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <header>
    <Header {...args} />
  </header>
);
export const HeaderMenu = Template.bind({});
HeaderMenu.args = {};
