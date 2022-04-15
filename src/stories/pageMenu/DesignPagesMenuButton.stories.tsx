import { ComponentStory, ComponentMeta } from "@storybook/react";

import PageMenuButton from "../../components/pageMenu/PageMenuButton";

export default {
  title: "Designo/PageMenuButton",
  component: PageMenuButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof PageMenuButton>;

const Template: ComponentStory<typeof PageMenuButton> = (args) => (
  <section className={"w-full"}>
    <PageMenuButton {...args} />
  </section>
);
export const PageMenuButtonComponent = Template.bind({});
PageMenuButtonComponent.args = {
  title: "Web Design",
  backgroundClass:
    "menu-pages-web-design-mobile sm:menu-pages-web-design-tablet lg:menu-pages-web-design-desktop",
  backgroundHoverClass:
    "hover:menu-pages-web-design-mobile-hover sm:hover:menu-pages-web-design-tablet-hover lg:hover:menu-pages-web-design-desktop-hover",
};
