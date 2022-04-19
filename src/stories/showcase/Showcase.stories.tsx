import { ComponentStory, ComponentMeta } from "@storybook/react";

import Work from "../../components/showcase/Work";
import WebDesignShowcase from "../../components/showcase/WebDesignShowcase";
import AppDesignShowcase from "../../components/showcase/AppDesignShowcase";
import GraphicDesignShowcase from "../../components/showcase/GraphicDesignShowcase";

export default {
  title: "Designo/Showcase",
  component: Work,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof Work>;

const WorkTemplate: ComponentStory<typeof Work> = (args) => (
  <div>
    <Work {...args} />
  </div>
);

export const WorkComponent = WorkTemplate.bind({});
WorkComponent.args = {
  imageSrc: "/assets/web-design/desktop/image-express.jpg",
  title: "Express",
  description: "A multi-carrier shipping website for ecommerce businesses",
};

const WebDesignShowcaseTemplate: ComponentStory<typeof WebDesignShowcase> = (
  args
) => (
  <div>
    <WebDesignShowcase />
  </div>
);

export const WebDesignShowcaseComponent = WebDesignShowcaseTemplate.bind({});
WebDesignShowcaseComponent.args = {};

const AppDesignShowcaseTemplate: ComponentStory<typeof AppDesignShowcase> = (
  args
) => (
  <div>
    <AppDesignShowcase />
  </div>
);

export const AppDesignShowcaseComponent = AppDesignShowcaseTemplate.bind({});
AppDesignShowcaseComponent.args = {};

const GraphicDesignShowcaseTemplate: ComponentStory<
  typeof GraphicDesignShowcase
> = (args) => (
  <div>
    <GraphicDesignShowcase />
  </div>
);

export const GraphicDesignShowcaseComponent =
  GraphicDesignShowcaseTemplate.bind({});
GraphicDesignShowcaseComponent.args = {};
