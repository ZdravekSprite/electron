import React from "react";
import { Renderer, Window, Text, View } from "@nodegui/react-nodegui";
import { QIcon } from "@nodegui/nodegui";
import { manuBar } from "./menus";

const icon = new QIcon('./assets/logox200.png');

const windowHandler = {
  Close: () => {
    console.log("is closed");
  },
  WindowDeactivate: () => {
    console.log("out of focus");
  },
};

const App = () => {
  return (
    <Window
      windowTitle="Hello!"
      windowIcon={icon}
      minSize={{ width: 550, height: 450 }}
      menuBar={manuBar}
      on={windowHandler}
      id="window"
      visible={true}
    >

      <View style={viewStyle}>
        <Text>Hello World!</Text>
      </View>
    </Window>
  );
};

const viewStyle = `
  background-color: teal;
`;

Renderer.render(<App />);