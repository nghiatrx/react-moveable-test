const PREFIX = "EDITOR";

export const ADD_BLOCK = `${PREFIX}:ADD_BLOCK`;
export const SET_CURRENT = `${PREFIX}:SET_CURRENT`;

export const addBlock = (block) => {
  return { type: ADD_BLOCK, payload: block };
};

export const setCurrent = (target) => {
  return { type: SET_CURRENT, payload: target };
};
