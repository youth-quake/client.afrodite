import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import centered from "@storybook/addon-centered";
import backgrounds from "@storybook/addon-backgrounds";
import { Button } from "./Button";

const buttonContainer = {
  width: "300px"
};

const ButtonStories = storiesOf("Button", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(backgroundThemes))
  .add(
    "default",
    withInfo("default")(() => (
      <div style={buttonContainer}>
        <Button onClick={action("button-click")}>Button</Button>
      </div>
    ))
  )
  .add(
    "primary",
    withInfo("enabled button")(() => (
      <div style={buttonContainer}>
        <Button primary onClick={action("button-click")}>
          Button
        </Button>
      </div>
    ))
  )
  .add(
    "disabled",
    withInfo("disabled button")(() => (
      <div style={buttonContainer}>
        <Button disabled onClick={action("button-click")}>
          Button
        </Button>
      </div>
    ))
  );

export default ButtonStories;
