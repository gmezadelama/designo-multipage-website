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
  <header>
    <Header {...args} />
  </header>
);
const FooterTemplate: ComponentStory<typeof Header> = (args) => (
  <footer className={"p-0"}>
    <Footer />
  </footer>
);

export const HeaderMenu = Template.bind({});
HeaderMenu.args = {};

export const FooterMenu = FooterTemplate.bind({});
FooterMenu.args = {};
