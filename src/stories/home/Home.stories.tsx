import { ComponentStory, ComponentMeta } from "@storybook/react";

import Hero from "../../components/home/Hero";

export default {
  title: "Designo/Home",
  component: Hero,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof Hero>;

const HeroTemplate: ComponentStory<typeof Hero> = (args) => (
  <div>
    <Hero />
  </div>
);

export const HeroComponent = HeroTemplate.bind({});
