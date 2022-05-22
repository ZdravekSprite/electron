import { QAction, QApplication, QIcon, QKeySequence, QMainWindow, QMenu, QMenuBar, QSystemTrayIcon } from '@nodegui/nodegui';
import logo from '../assets/logox200.png';

const win = new QMainWindow();
const icon = new QIcon(logo);
win.setWindowTitle("Hello World");
win.setWindowIcon(icon);
//win.showFullScreen();
//win.showMaximized();
/*
const tray = new QSystemTrayIcon();
tray.setIcon(icon);
tray.show();
tray.setToolTip("hello");
*/
const fileMenu = new QMenu();
//tray.setContextMenu(menu);

// -------------------
// Quit Action
// -------------------
const quitAction = new QAction();
quitAction.setText('Quit');
quitAction.setIcon(icon);
quitAction.setShortcut(new QKeySequence("Alt+F4"));
quitAction.addEventListener("triggered", () => {
  const app = QApplication.instance();
  app.exit(0);
});

// ----------------------
// Add everything to menu
// ----------------------
fileMenu.addAction(quitAction);
fileMenu.setTitle('&File');

const menuBar = new QMenuBar();
menuBar.addMenu(fileMenu);
//menuBar.show();

win.setMenuBar(menuBar);
win.show();

(global as any).win = win; // To prevent win from being garbage collected.
//(global as any).systemTray = tray; // To prevent system tray from being garbage collected.