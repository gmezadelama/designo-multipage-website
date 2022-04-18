import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from "../../components/footer/Footer";

export default {
  title: "Designo/Footer",
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof Footer>;

const FooterTemplate: ComponentStory<typeof Footer> = (args) => (
  <footer className={"p-0"}>
    <Footer {...args} />
  </footer>
);

export const FooterMenu = FooterTemplate.bind({});
FooterMenu.args = {};
