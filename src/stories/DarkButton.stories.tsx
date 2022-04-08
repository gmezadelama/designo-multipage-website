import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DarkButton from "../components/buttons/DarkButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Designo/Buttons",
  component: DarkButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof DarkButton>;

const Template: ComponentStory<typeof DarkButton> = (args) => (
  <div
    className={
      "bg-lightGrey gap-8 columns-1 w-[405px] h-[263px] grid place-content-center before:-rotate-180 "
    }
  >
    <div>
      <h3 className="text-center text-darkGrey">{"Button on light"}</h3>
    </div>
    <div className="text-center">
      <DarkButton {...args} />
    </div>
    <div className="text-center">
      <DarkButton {...args} />
    </div>
  </div>
);

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {
  label: "Learn More",
};
