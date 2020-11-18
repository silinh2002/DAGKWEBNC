import React, { useState, useEffect } from "react";
import "../../styles/columns/column.scss";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import { IconButton } from "@material-ui/core";
import Board from "./board";
import axios from "axios";

function addBoard(id) {
  axios
    .post("http://localhost:1000/board", {
      name: "New board",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default function ListBoard({
  board,
  getAll,
  createBoard,
  readBoard,
  updateBoard,
  deleteBoard,
}) {
  useEffect(() => {
    axios.get("http://localhost:1000/board").then((res) => {
      getAll(res.data.data.data);
    });
  }, [getAll]);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="list-wrapper">
      <div className="list">
        <div
          className="list-header is-menu-shown"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          {board.boardName}
        </div>

        <div>
          {board.items.map((item) => (
            <Board
              isEdit={item.isEdit}
              key={item._id}
              title={item._id}
              name={item.name}
              onDone={refreshPage}
            ></Board>
          ))}
        </div>

        <div onClick={addBoard} className="card-composer-container">
          <a className="open-card-composer">
            <IconButton className="icon-sm icon-add" color="primary">
              <AddToPhotosIcon />
            </IconButton>
            <span className="js-add-another-card">Add a board</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// export default listBoard;
