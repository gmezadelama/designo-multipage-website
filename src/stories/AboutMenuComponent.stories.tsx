import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default {
  title: "Designo/About Menu",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <div>
    <Header {...args} />
  </div>
);
const FooterTemplate: ComponentStory<typeof Header> = (args) => (
  <div className={"bg-black p-2"}>
    <Footer />
  </div>
);

export const HeaderMenu = Template.bind({});
HeaderMenu.args = {};

export const FooterMenu = FooterTemplate.bind({});
FooterMenu.args = {};
