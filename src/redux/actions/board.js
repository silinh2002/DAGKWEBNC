import * as types from "../constants/type";

export const getAll = (item) => ({
  type: types.LIST_BOARD,
  payload: item,
  // isEdit: false,
});
export const createBoard = () => {
  return types.CREATE_BOARD;
};
export const readBoard = () => {
  return types.READ_BOARD;
};
export const updateBoard = (item) => ({
  type: types.UPDATE_BOARD,
  payload: item,
});
export const deleteBoard = () => {
  return types.DELETE_BOARD;
};
