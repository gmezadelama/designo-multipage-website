import { ComponentStory, ComponentMeta } from "@storybook/react";

import DesignoAttribute from "../../components/attributes/DesignoAttribute";
import DesignoAttributesList from "../../components/attributes/DesignoAttributesList";

export default {
  title: "Designo/Attributes",
  component: DesignoAttribute,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof DesignoAttribute>;

const SingleAttributeTemplate: ComponentStory<typeof DesignoAttribute> = (
  args
) => (
  <div>
    <DesignoAttribute {...args} />
  </div>
);

export const SingleAttributeComponent = SingleAttributeTemplate.bind({});
SingleAttributeComponent.args = {
  title: "Passionate",
  description:
    "Each project starts with an in-depth brand research to ensure we only create products that server a purpose. We merge art, design, and technology into exciting new solution.",
  imageClass: "attribute-passionate",
};

const AttributeListTemplate: ComponentStory<typeof DesignoAttribute> = (
  args
) => (
  <div>
    <DesignoAttributesList />
  </div>
);

export const AttributeListComponent = AttributeListTemplate.bind({});
AttributeListComponent.args = {};
