import "../scss/localeSwitcher.scss";
import type { Meta, StoryObj } from "@storybook/react";

import LocaleSwitcher from "../components/LocaleSwitcher";

const meta: Meta<typeof LocaleSwitcher> = {
  title: "Component/LocaleSwitcher",
  component: LocaleSwitcher,
  argTypes: {
    locale: {
      name: "current locale in browser",
    },
    onButtonClick: {
      name: "event on language click",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LocaleSwitcher>;

export const Primary: Story = {
  args: {
    locale: "ru",
    onButtonClick: () => {},
  },
};
