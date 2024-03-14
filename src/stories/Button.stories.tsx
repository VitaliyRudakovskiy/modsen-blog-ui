import "../scss/button.scss";
import { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  argTypes: {
    children: {
      name: "text inside",
    },
    variant: {
      name: "button variant",
    },
    disabled: {
      name: "is button disabled",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};
