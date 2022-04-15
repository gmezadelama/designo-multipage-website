import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContactUsForm from "../../contact/ContactUsForm";

export default {
  title: "Designo/Contact Us",
  component: ContactUsForm,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof ContactUsForm>;

const ContactUsFormTemplate: ComponentStory<typeof ContactUsForm> = (args) => (
  <div>
    <ContactUsForm />
  </div>
);

export const ContactUsFormComponent = ContactUsFormTemplate.bind({});
