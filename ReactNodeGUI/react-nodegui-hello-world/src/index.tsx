import React from "react";
import { Renderer, Window, Text, View } from "@nodegui/react-nodegui";
import { QApplication, QIcon, QKeySequence } from "@nodegui/nodegui";
import { RNMenuBar } from "@nodegui/react-nodegui/dist/components/MenuBar/RNMenuBar";
import { RNMenu } from "@nodegui/react-nodegui/dist/components/Menu/RNMenu";
import { RNAction } from "@nodegui/react-nodegui/dist/components/Action/RNAction";

const icon = new QIcon('./assets/logox200.png');
const isMac = process.platform === 'darwin';

const manuBar = new RNMenuBar();
const fileMenu = new RNMenu();
const editMenu = new RNMenu();

// -------------------
// Quit Action
// -------------------
const quitAction = new RNAction();
quitAction.setText(isMac ? 'Close' : 'Quit');
quitAction.setShortcut(new QKeySequence("Alt+F4"));
quitAction.addEventListener("triggered", () => {
  const app = QApplication.instance();
  app.exit(0);
});

fileMenu.addAction(quitAction);
fileMenu.setTitle('&File');
manuBar.addMenu(fileMenu);

editMenu.addAction('undo');
editMenu.addAction('redo');
editMenu.addSeparator();
editMenu.addAction('cut');
editMenu.addAction('copy');
editMenu.addAction('paste');
editMenu.setTitle('&Edit');
manuBar.addMenu(editMenu);

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