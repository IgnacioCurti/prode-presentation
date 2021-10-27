import { VFC } from "react";
import { Meta } from "@storybook/react";
import Navigation from "@app/components/Navigation";

export default {
    component: Navigation,
    title: "Components/Core/Navigation",
    argTypes: {
        items: {
            description: "An array containing the slides labels"
        }
    }
} as Meta;

export const NavigationStory: VFC<{}> = () => <Navigation />;
