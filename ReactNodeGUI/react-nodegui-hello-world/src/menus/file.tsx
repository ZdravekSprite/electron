import React from "react";
import { QApplication, QKeySequence } from "@nodegui/nodegui";
import { RNMenu } from "@nodegui/react-nodegui/dist/components/Menu/RNMenu";
import { RNAction } from "@nodegui/react-nodegui/dist/components/Action/RNAction";

const isMac = process.platform === 'darwin';

export const fileMenu = new RNMenu();
fileMenu.setTitle('&File');

// -------------------
// New Action
// -------------------
const newAction = new RNAction();
newAction.setText('New');
newAction.setShortcut(new QKeySequence("Ctrl+N"));
fileMenu.addAction(newAction);

// -------------------
// Open SQL Geo database Action
// -------------------
const openSqlAction = new RNAction();
openSqlAction.setText('Open SQL Geo database...');
fileMenu.addAction(openSqlAction);

// -------------------
// Open Action
// -------------------
const openAction = new RNAction();
openAction.setText('Open...');
openAction.setShortcut(new QKeySequence("Ctrl+O"));
fileMenu.addAction(openAction);

// -------------------
// Query Action
// -------------------
const queryAction = new RNAction();
queryAction.setText('Query');
queryAction.setShortcut(new QKeySequence("Ctrl+Q"));
fileMenu.addAction(queryAction);

fileMenu.addSeparator();
// -------------------
// Import Action
// -------------------
const importAction = new RNAction();
importAction.setText('Import');
fileMenu.addAction(importAction);

// -------------------
// Upgrade section Action
// -------------------
const upgradeSectionAction = new RNAction();
upgradeSectionAction.setText('Upgrade section');
fileMenu.addAction(upgradeSectionAction);

// -------------------
// Delete section Action
// -------------------
const deleteSectionAction = new RNAction();
deleteSectionAction.setText('Delete section');
fileMenu.addAction(deleteSectionAction);

fileMenu.addSeparator();
// -------------------
// Import Action
// -------------------
const closeAction = new RNAction();
closeAction.setText('Close');
fileMenu.addAction(closeAction);

fileMenu.addSeparator();
// -------------------
// Import Action
// -------------------
const printAction = new RNAction();
printAction.setText('Print...');
printAction.setShortcut(new QKeySequence("Ctrl+P"));
fileMenu.addAction(printAction);

fileMenu.addSeparator();
fileMenu.addSeparator();
// -------------------
// Quit Action
// -------------------
const quitAction = new RNAction();
quitAction.setText(isMac ? 'Close' : 'Exit');
quitAction.setShortcut(new QKeySequence("Alt+F4"));
quitAction.addEventListener("triggered", () => {
  const app = QApplication.instance();
  app.exit(0);
});
fileMenu.addAction(quitAction);