import "../scss/select.scss";
import type { Meta, StoryObj } from "@storybook/react";

import Select from "../components/Select";

const meta: Meta<typeof Select> = {
  title: "Component/Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {};
