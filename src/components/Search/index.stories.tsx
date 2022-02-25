import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Search, { SearchProps } from ".";

export default {
  title: "Components/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args: SearchProps) => (
  <Search {...args} />
);

export const Default = Template.bind({});
Default.args = {};
