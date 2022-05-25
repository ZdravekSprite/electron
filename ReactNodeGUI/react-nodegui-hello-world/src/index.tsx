import React from "react";
import { Renderer, Window, Text, View } from "@nodegui/react-nodegui";
import { QIcon } from "@nodegui/nodegui";
import { manuBar } from "./menus";

const icon = new QIcon('./assets/logox200.png');

const App = () => {
  return (
    <Window
      windowTitle="Hello!"
      windowIcon={icon}
      minSize={{width: 550, height: 450}}
      menuBar={manuBar}
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