import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { useDispatch } from "react-redux";
import { setCurrent } from "../store/editor/editor.actions";

export const LAYER_CLASS = "layer";

const Layer = React.memo(({ layer, blockIndex, layerIndex }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      setCurrent({
        blockIndex,
        layerIndex,
      })
    );
  };
  return (
    <LayerWrapper
      id={layer.uuid}
      width={layer.config.width}
      height={layer.config.height}
      className={LAYER_CLASS}
      onClick={handleClick}
    >
      {layer.items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </LayerWrapper>
  );
});

const LayerWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Layer;
