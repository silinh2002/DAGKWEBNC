import { connect } from "react-redux";
import ListBoardComponet from "../components/boards/list-board";
import * as actions from "../redux/actions/board";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    board: state.board,
  };
};

const mapActionsToProps = {
  // Actions: {
  //   getAll: actions.getAll,
  //   createBoard: actions.createBoard,
  //   readBoard: actions.readBoard,
  //   updateBoard: actions.updateBoard,
  //   deleteBoard: actions.deleteBoard,
  // },
  getAll: actions.getAll,
  createBoard: actions.createBoard,
  readBoard: actions.readBoard,
  updateBoard: actions.updateBoard,
  deleteBoard: actions.deleteBoard,
};

export default connect(mapStateToProps, mapActionsToProps)(ListBoardComponet);
