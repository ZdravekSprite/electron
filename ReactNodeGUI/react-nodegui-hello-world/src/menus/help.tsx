import { ButtonRole, QMessageBox, QPushButton } from "@nodegui/nodegui";
import { RNAction } from "@nodegui/react-nodegui/dist/components/Action/RNAction";
import { RNMenu } from "@nodegui/react-nodegui/dist/components/Menu/RNMenu";

export const helpMenu = new RNMenu();
helpMenu.setTitle('&Help');

// -------------------
// About Action
// -------------------
const aboutAction = new RNAction();
aboutAction.setText('&About');
aboutAction.addEventListener("triggered", () => {
  const messageBox = new QMessageBox();
  messageBox.setText('About Application');
  const accept = new QPushButton();
  accept.setText('Accept');
  messageBox.addButton(accept, ButtonRole.AcceptRole);
  messageBox.exec();
});
helpMenu.addAction(aboutAction);