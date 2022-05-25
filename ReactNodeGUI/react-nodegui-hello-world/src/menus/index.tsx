import { RNMenuBar } from "@nodegui/react-nodegui/dist/components/MenuBar/RNMenuBar";
import { fileMenu } from "./file";
import { editMenu } from "./edit";
import { viewMenu } from "./view";
import { gpsMenu } from "./gps";
import { drkaliceMenu } from "./drkalice";
import { windowMenu } from "./window";
import { helpMenu } from "./help";

export const manuBar = new RNMenuBar();

manuBar.addMenu(fileMenu);
manuBar.addMenu(editMenu);
manuBar.addMenu(viewMenu);
manuBar.addMenu(gpsMenu);
manuBar.addMenu(drkaliceMenu);
manuBar.addMenu(windowMenu);
manuBar.addMenu(helpMenu);