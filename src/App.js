import React from "react";
import { useSelector } from "react-redux";
import Block from "./components/Block";
import MoveableController from "./components/MoveableController";

function App() {
  const blocks = useSelector((state) => state.editor.blocks);
  return (
    <div className="App">
      <MoveableController />
      {blocks.map((block, index) => (
        <Block block={block} index={index} key={index} />
      ))}
    </div>
  );
}

export default App;
