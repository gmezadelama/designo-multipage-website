import { ComponentStory, ComponentMeta } from "@storybook/react";

import Feature from "../../components/features/Feature";
import WebDesignFeaturesList from "../../components/features/WebDesignFeaturesList";
import AppDesignFeaturesList from "../../components/features/AppDesignFeaturesList";
import GraphicDesignFeaturesList from "../../components/features/GraphicDesignFeaturesList";

export default {
  title: "Designo/Features",
  component: Feature,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof Feature>;

const FeatureTemplate: ComponentStory<typeof Feature> = (args) => (
  <div>
    <Feature {...args} />
  </div>
);

export const FeatureComponent = FeatureTemplate.bind({});
FeatureComponent.args = {
  imageSrc: "/assets/web-design/desktop/image-express.jpg",
  title: "Express",
  description: "A multi-carrier shipping website for ecommerce businesses",
};

const WebDesignFeaturesListTemplate: ComponentStory<
  typeof WebDesignFeaturesList
> = (args) => (
  <div>
    <WebDesignFeaturesList />
  </div>
);

export const WebDesignFeaturesListComponent =
  WebDesignFeaturesListTemplate.bind({});
WebDesignFeaturesListComponent.args = {};

const AppDesignFeaturesListTemplate: ComponentStory<
  typeof AppDesignFeaturesList
> = (args) => (
  <div>
    <AppDesignFeaturesList />
  </div>
);

export const AppDesignFeaturesListComponent =
  AppDesignFeaturesListTemplate.bind({});
AppDesignFeaturesListComponent.args = {};

const GraphicDesignFeaturesListTemplate: ComponentStory<
  typeof GraphicDesignFeaturesList
> = (args) => (
  <div>
    <GraphicDesignFeaturesList />
  </div>
);

export const GraphicDesignFeaturesListComponent =
  GraphicDesignFeaturesListTemplate.bind({});
GraphicDesignFeaturesListComponent.args = {};
