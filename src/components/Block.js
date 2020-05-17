import React from "react";
import styled from "styled-components";
import Layer from "./Layer";

export const BLOCK_CLASS = "block";

const Block = React.memo(({ block, index }) => {
  const blockIndex = index;
  return (
    <BlockWrapper
      className={BLOCK_CLASS}
      id={block.uuid}
      width={block.config.width}
      height={block.config.height}
    >
      {block.layers.map((layer, index) => (
        <Layer
          blockIndex={blockIndex}
          layerIndex={index}
          layer={layer}
          key={index}
        />
      ))}
    </BlockWrapper>
  );
});

const BlockWrapper = styled.div`
  border: 1px solid;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Block;
