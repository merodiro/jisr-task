import "./App.css";

import ContextMenu from "./ContextMenu";
import { ContextMenuProvider } from "./ContextMenuContext";
import { files } from "./data";
import FileTree from "./FileTree";

function App() {
  const onAction = (action: string, identifier: string) => {
    console.log(`Action: ${action}, Target: ${identifier}`);
  };

  return (
    <ContextMenuProvider>
      Files:
      <FileTree file={files} />
      <ContextMenu onAction={onAction} />
    </ContextMenuProvider>
  );
}

export default App;
