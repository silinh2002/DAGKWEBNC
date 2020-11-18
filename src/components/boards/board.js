import React, { useState } from "react";
import "../../styles/cards/card.scss";

import { Grid, Box, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import axios from "axios";

function updateBoard(id, lambda) {
  axios
    .patch("http://localhost:1000/board/" + id, lambda)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function Board(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [board, setBoard] = useState({
    name: props.name,
    title: props.title,
  });

  function deleteBoard(id) {
    axios
      .delete("http://localhost:1000/board/" + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    props.onDone(props);
  }

  const success = (id) => {
    let lambda = { name: board.name };
    updateBoard(id, lambda);
    setIsEdit(false);
    props.onDone(props);
  };
  const showName = () => {
    if (isEdit)
      return (
        <input
          name="name"
          type="text"
          style={{ height: "60px", width: "90%", border: "1px solid #555" }}
          value={board.name}
          onChange={(e) =>
            setBoard(
              Object.assign({}, board, { [e.target.name]: e.target.value })
            )
          }
        />
      );
    return props.name;
  };
  const showbtn = () => {
    if (isEdit) {
      return (
        <>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => success(props.title)}
          >
            OK
          </IconButton>
        </>
      );
    } else {
      return (
        <>
          <IconButton
            onClick={() => deleteBoard(props.title)}
            color="secondary"
            aria-label="upload picture"
            component="span"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => setIsEdit(true)}
          >
            <BorderColorIcon />
          </IconButton>
        </>
      );
    }
  };
  return (
    <div className="list-cards">
      <a className="card">
        <div className="card-content">
          <div className="title" title={props.title}>
            {showName()}
          </div>
        </div>

        <div className="grid">{showbtn()}</div>
      </a>
    </div>
  );
}

export default Board;
