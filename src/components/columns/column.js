import React from "react";
import "../../styles/columns/column.scss";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import { Grid, Avatar, Paper, IconButton, Button } from "@material-ui/core";
import Card from "../cards/card";
function column(props) {
  return (
    <div className="list-wrapper">
      <div className="list">
        <div className="list-header is-menu-shown">{props.columnName}</div>

        <div>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>

        <div className="card-composer-container">
          <a className="open-card-composer">
            <IconButton className="icon-sm icon-add" color="primary">
              <AddToPhotosIcon />
            </IconButton>
            <span className="js-add-another-card">Add a card</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default column;
