import "./App.css";

import { ContextMenuProvider } from "./ContextMenuContext";
import { files } from "./data";
import FileTree from "./FileTree";

function App() {
  return (
    <ContextMenuProvider>
      Files:
      <FileTree file={files} />
    </ContextMenuProvider>
  );
}

export default App;
