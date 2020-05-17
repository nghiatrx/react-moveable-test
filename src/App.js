import React from "react";
import MoveableItem from "./MoveableItem";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <MoveableItem container={document.body}>
        <TextItem>aaaaaaa</TextItem>
      </MoveableItem>

      <MoveableItem container={document.body}>
        <TextItem>bbbbb</TextItem>
      </MoveableItem>
    </div>
  );
}

const TextItem = styled.div`
  width: 100px;
  height: 100px;
`;

export default App;
