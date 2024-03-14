import "../scss/input.scss";
import type { Meta, StoryObj } from "@storybook/react";

import Input from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Component/Input",
  component: Input,
  argTypes: {
    placeholder: {
      name: "input placeholder",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: "Input your email",
  },
};
