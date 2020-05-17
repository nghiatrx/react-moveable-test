import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Moveable from "react-moveable";
import { v4 } from "uuid";

const MoveableItem = React.memo(({ container, children }) => {
  const [id] = useState(v4());
  const [target, setTarget] = useState(null);
  const [frame] = useState({ translate: [0, 0] });
  useEffect(() => {
    setTarget(document.getElementById(id));
  }, [id]);

  return (
    <MoveableItemWrapper>
      <Moveable
        target={target}
        origin={false}
        container={container}
        draggable
        resizable
        throttleDrag={0}
        pinchThreshold={20}
        renderDirections={["nw", "ne", "se", "sw"]}
        rotationPosition="bottom"
        rotatable
        onDragStart={({ set }) => {
          set(frame.translate);
        }}
        onDrag={({ target, beforeTranslate }) => {
          frame.translate = beforeTranslate;
          target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
        }}
      />
      <div style={{ display: "inline-block" }} id={id}>
        {children}
      </div>
    </MoveableItemWrapper>
  );
});

const MoveableItemWrapper = styled.div`
  .moveable-control {
    border-radius: 0%;
  }
`;

export default MoveableItem;
