import React from "react";

const Item = React.memo(({ item }) => {
  return (
    <div style={{ width: item.config.width, height: item.config.height }}>
      {item.config.value}
    </div>
  );
});

export default Item;
