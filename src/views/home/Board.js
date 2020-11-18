import Column from "../../components/columns/column";
import "../../styles/boards/board.scss";
function Dashboard(props) {
  return (
    <>
      <div className="container ">
        <div className="board">
          {/* <div className="board-background"></div> */}
          <Column columnName="Went well"></Column>
          <Column columnName="To improve"></Column>
          <Column columnName="Action Items"></Column>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
