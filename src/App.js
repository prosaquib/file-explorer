import { useState } from "react";
import Folder from "./components/folder";
import data from "./data/explorer.json";
import useTreeTraversal from "./hooks/use-tree-traversal";
import "./App.css";

function App() {
  const [explorerData, setExplorerData] = useState(data);
  const { insertNode } = useTreeTraversal();

  const handleInsertNode = (folderId, item, isFolder) => {
    console.log("folderId: " + folderId, "item: " + item);
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className='App'>
      <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  );
}

export default App;
