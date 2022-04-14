import { ComponentStory, ComponentMeta } from "@storybook/react";

import Title, { DesignPagesEnum } from "../../components/title/Title";

export default {
  title: "Designo/Title",
  component: Title,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof Title>;

const WebTitleTemplate: ComponentStory<typeof Title> = (args) => (
  <section>
    <Title {...args} />
  </section>
);

const AppTitleTemplate: ComponentStory<typeof Title> = (args) => (
  <section>
    <Title {...args} />
  </section>
);

const GraphicTitleTemplate: ComponentStory<typeof Title> = (args) => (
  <section>
    <Title {...args} />
  </section>
);

export const WebTitleComponent = WebTitleTemplate.bind({});
WebTitleComponent.args = {
  page: DesignPagesEnum.Web,
};

export const AppTitleComponent = AppTitleTemplate.bind({});
AppTitleComponent.args = {
  page: DesignPagesEnum.App,
};

export const GraphicTitleComponent = GraphicTitleTemplate.bind({});
GraphicTitleComponent.args = {
  page: DesignPagesEnum.Graphic,
};
