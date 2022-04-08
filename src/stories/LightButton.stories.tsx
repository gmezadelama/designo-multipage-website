import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LightButton from "../components/buttons/LightButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Designo/Buttons",
  component: LightButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LightButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LightButton> = (args) => (
  <div
    className={
      "bg-peach bg-design-pattern bg-[left_454px_top_-80px] gap-8 columns-1 w-[405px] h-[263px] grid place-content-center before:-rotate-180 "
    }
  >
    <div>
      <h3 className="text-center text-white">{"Button on dark"}</h3>
    </div>
    <div className="text-center">
      <LightButton {...args} />
    </div>
    <div className="text-center">
      <LightButton {...args} />
    </div>
  </div>
);

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
  label: "Learn More",
};
