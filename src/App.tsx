import "./App.css";

import { files } from "./data";
import FileTree from "./FileTree";

function App() {
  return (
    <>
      Files:
      <FileTree file={files} />
    </>
  );
}

export default App;
