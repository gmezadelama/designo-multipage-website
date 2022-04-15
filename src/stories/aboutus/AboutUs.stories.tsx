import { ComponentStory, ComponentMeta } from "@storybook/react";

import AboutUsSubSection from "../../components/aboutus/AboutUsSubSection";
import RealDeal from "../../components/aboutus/RealDeal";
import WorldClassTalent from "../../components/aboutus/WorldClassTalent";
import AboutUsHeader from "../../components/aboutus/AboutUsHeader";

export default {
  title: "Designo/About Us",
  component: AboutUsSubSection,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof AboutUsSubSection>;

const RealDealTemplate: ComponentStory<typeof RealDeal> = (args) => (
  <div>
    <RealDeal />
  </div>
);

export const RealDealComponent = RealDealTemplate.bind({});

const WorldClassTemplate: ComponentStory<typeof WorldClassTalent> = (args) => (
  <div>
    <WorldClassTalent />
  </div>
);

export const WorldClassComponent = WorldClassTemplate.bind({});

const AboutUsHeaderTemplate: ComponentStory<typeof AboutUsHeader> = (args) => (
  <div>
    <AboutUsHeader />
  </div>
);

export const AboutUsHeaderComponent = AboutUsHeaderTemplate.bind({});
