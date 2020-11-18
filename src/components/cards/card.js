import React from "react";
import "../../styles/cards/card.scss";

import { Grid, Box, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from "@material-ui/icons/BorderColor";

function column(props) {
  return (
    <div className="list-cards">
      <a className="card">
        <div className="card-content">
          <div className="title" title="Thiết kế giao diệnaaaaaaa">
            Thiết kế giao diện
          </div>
          <div className="content">
            There is an open issue on their repository with an associated fix
            that needs to be reviewed. Until then, refer to the solution below
          </div>
          <div className="username">LQSL</div>
        </div>

        <div className="grid">
          <IconButton
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
          >
            <BorderColorIcon />
          </IconButton>
        </div>
      </a>
    </div>
  );
}

export default column;
