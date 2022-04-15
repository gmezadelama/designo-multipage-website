import { ComponentStory, ComponentMeta } from "@storybook/react";

import DetailedLocation from "../../locations/DetailedLocation";
import DetailedLocationsList from "../../locations/DetailedLocationsList";

export default {
  title: "Designo/Detailed Locations",
  component: DetailedLocation,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof DetailedLocation>;

const DetailedLocationTemplate: ComponentStory<typeof DetailedLocation> = (
  args
) => (
  <div>
    <DetailedLocation {...args} />
  </div>
);

export const DetailedLocationComponent = DetailedLocationTemplate.bind({});
DetailedLocationComponent.args = {
  title: "Canada",
  mapClass:
    "detailed-location-canada sm:detailed-location-canada-tablet lg:detailed-location-canada",
  officeTitle: "Designo Central Office",
  officeAddrLine1: "3886 Wellington Street",
  officeAddrLine2: "Toronto, Ontario M9C 3J5",
  phoneNumber: "+1 253-863-8967",
  email: "contact@designo.co",
};

const DetailedLocationsListTemplate: ComponentStory<
  typeof DetailedLocationsList
> = (args) => (
  <div>
    <DetailedLocationsList />
  </div>
);

export const DetailedLocationsListComponent =
  DetailedLocationsListTemplate.bind({});
DetailedLocationsListComponent.args = {};
