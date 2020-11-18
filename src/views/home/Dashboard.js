// import Board from "../../components/boards/list-board";

import ListBoard from "../../containers/Board";
import "../../styles/boards/board.scss";
function Dashboard(props) {
  return (
    <>
      <div className="container ">
        <div className="board">
          <ListBoard></ListBoard>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
