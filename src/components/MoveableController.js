import React, { useEffect } from "react";
import Moveable from "react-moveable";
import { useSelector } from "react-redux";

let currentBlock = null;
let currentLayer = null;
let frame = {
  translate: [],
};

const MoveableController = React.memo(() => {
  const { blockIndex, layerIndex } = useSelector(
    (state) => state.editor.current
  );

  const currentBlockUuid = useSelector(
    (state) => state.editor.blocks[blockIndex]?.uuid
  );

  const currentLayerUuid = useSelector(
    (state) => state.editor.blocks[blockIndex]?.layers[layerIndex]?.uuid
  );

  const currentLayerConfig = useSelector(
    (state) => state.editor.blocks[blockIndex]?.layers[layerIndex]?.config
  );

  useEffect(() => {
    currentBlock = document.getElementById(currentBlockUuid);
    console.log(currentBlock);
  }, [currentBlockUuid]);

  useEffect(() => {
    currentLayer = document.getElementById(currentLayerUuid);
  }, [currentLayerUuid]);

  useEffect(() => {
    frame.translate = currentLayerConfig ? currentLayerConfig.translate : [];
  }, [currentLayerConfig]);

  const handleDragStart = ({ set }) => {
    set(frame.translate);
  };
  const handleDrag = ({ target, beforeTranslate }) => {
    frame.translate = beforeTranslate;
    target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
  };
  return (
    <Moveable
      target={currentLayer}
      origin={false}
      container={currentBlock}
      draggable
      resizable
      throttleDrag={0}
      pinchThreshold={20}
      renderDirections={["nw", "ne", "se", "sw"]}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
    />
  );
});

export default MoveableController;
