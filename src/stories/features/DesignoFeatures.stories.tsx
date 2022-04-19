import { ComponentStory, ComponentMeta } from "@storybook/react";

import DesignoFeature from "../../components/features/DesignoFeature";
import DesignoFeaturesList from "../../components/features/DesignoFeaturesList";

export default {
  title: "Designo/Features",
  component: DesignoFeature,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof DesignoFeature>;

const SingleFeatureTemplate: ComponentStory<typeof DesignoFeature> = (args) => (
  <div>
    <DesignoFeature {...args} />
  </div>
);

export const SingleFeatureComponent = SingleFeatureTemplate.bind({});
SingleFeatureComponent.args = {
  title: "Passionate",
  description:
    "Each project starts with an in-depth brand research to ensure we only create products that server a purpose. We merge art, design, and technology into exciting new solution.",
  imageClass: "feature-passionate",
  imageSrc: "/assets/home/desktop/illustration-passionate.svg",
};

const FeatureListTemplate: ComponentStory<typeof DesignoFeature> = (args) => (
  <div>
    <DesignoFeaturesList />
  </div>
);

export const FeatureListComponent = FeatureListTemplate.bind({});
FeatureListComponent.args = {};
