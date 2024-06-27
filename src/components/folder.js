import { useState } from "react";

export default function Folder({ explorer, handleInsertNode = () => {} }) {
  // const [explorer, setexplorer] = useState(explorer);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  function handleExpand() {
    setIsExpanded(!isExpanded);
  }

  function handleAddFolder(e, isFolder) {
    e.stopPropagation();
    setIsExpanded(true);
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  }

  const onAddfolder = (event) => {
    // console.log("Hey", event.target.value);
    if (event.keyCode === 13 && event.target.value) {
      console.log("Hey");
      const item = event.target.value;
      handleInsertNode(explorer.id, item, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  console.log("[App.js]explorer", explorer);
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div onClick={handleExpand} className='folder'>
          <span>📁{explorer.name}</span>
          <div>
            <button onClick={(e) => handleAddFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleAddFolder(e, false)}>File +</button>
          </div>
        </div>
        <div
          style={{
            display: isExpanded ? "block" : "none",
            paddingLeft: 25,
          }}
        >
          {showInput.visible && (
            <div className='inputContainer'>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type='text'
                className='inputConatiner__input'
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={onAddfolder}
              />
            </div>
          )}
          {explorer.items.map((exp) => (
            <Folder
              key={exp.id}
              explorer={exp}
              handleInsertNode={handleInsertNode}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <span className='file'>📄{explorer.name}</span>;
  }
}
