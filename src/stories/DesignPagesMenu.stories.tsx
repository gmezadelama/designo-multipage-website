import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FullMenu from "../components/pageMenu/FullMenu";
import PartialMenuLayout from "../components/pageMenu/PartialMenuLayout";
import WebDesignButton from "../components/pageMenu/WebDesignButton";
import AppDesignButton from "../components/pageMenu/AppDesignButton";

export default {
  title: "Designo/DesignPagesMenu",
  component: FullMenu,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof FullMenu>;

const FullMenuTemplate: ComponentStory<typeof FullMenu> = (args) => (
  <section className={"w-full"}>
    <FullMenu {...args} />
  </section>
);
export const FullMenuComponent = FullMenuTemplate.bind({});
FullMenuComponent.args = {};

const PartialMenuTemplate: ComponentStory<typeof FullMenu> = (args) => (
  <section className={"w-full"}>
    <PartialMenuLayout {...args}>
      <WebDesignButton />
      <AppDesignButton />
    </PartialMenuLayout>
  </section>
);
export const PartialMenuComponent = PartialMenuTemplate.bind({});
PartialMenuComponent.args = {};
