import { ITEM_TYPES } from "../../consts";
import { SET_CURRENT } from "./editor.actions";

const block = {
  uuid: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
  config: {
    width: "10in",
    height: "8in",
  },
  layers: [
    {
      uuid: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4b00",
      config: {
        width: "100px",
        height: "100px",
        translate: [0, 0],
      },
      items: [
        {
          type: ITEM_TYPES.TEXT,
          config: {
            value: "Hello",
            width: "100px",
            height: "100px",
          },
        },
      ],
    },
  ],
};

const defaultState = {
  current: {
    blockIndex: null,
    layerIndex: null,
  },
  blocks: [block],
};

const blockReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT:
      return { ...state, current: action.payload };
    default:
      return state;
  }
};

export default blockReducer;
