import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CompanyMenuHeader from "../components/header/CompanyMenuHeader";
import CompanyMenuFooter from "../components/footer/CompanyMenuFooter";

export default {
  title: "Designo/About Menu",
  component: CompanyMenuHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof CompanyMenuHeader>;

const Template: ComponentStory<typeof CompanyMenuHeader> = (args) => (
  <div>
    <CompanyMenuHeader {...args} />
  </div>
);
const FooterTemplate: ComponentStory<typeof CompanyMenuHeader> = (args) => (
  <div className={"bg-black p-2"}>
    <CompanyMenuFooter />
  </div>
);

export const HeaderMenu = Template.bind({});
HeaderMenu.args = {};

export const FooterMenu = FooterTemplate.bind({});
FooterMenu.args = {};
