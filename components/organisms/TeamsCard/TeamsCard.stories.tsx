import type { Meta, StoryObj } from "@storybook/react";
import TeamsCard from "./TeamsCard";
import { teamsMockData } from "@/app/api/nba/teams/active/route";

const meta = {
  title: "Organisms/TeamsCard",
  component: TeamsCard,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    href: "/",
    team: teamsMockData[0],
  },
} satisfies Meta<typeof TeamsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
