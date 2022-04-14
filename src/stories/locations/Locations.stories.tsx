import { ComponentStory, ComponentMeta } from "@storybook/react";

import Location from "../../locations/Location";
import LocationsList from "../../locations/LocationsList";

export default {
  title: "Designo/Locations",
  component: Location,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof Location>;

const LocationTemplate: ComponentStory<typeof Location> = (args) => (
  <div>
    <Location {...args} />
  </div>
);

export const LocationComponent = LocationTemplate.bind({});
LocationComponent.args = {
  title: "Canada",
  imageClass: "location-canada",
  imageSrc: "/assets/shared/desktop/illustration-canada.svg",
};

const LocationsListTemplate: ComponentStory<typeof LocationsList> = (args) => (
  <div>
    <LocationsList />
  </div>
);

export const LocationsListComponent = LocationsListTemplate.bind({});
LocationsListComponent.args = {};
