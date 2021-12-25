import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div>
          <span
            style={{ cursor: "pointer" }}
            className="me-3 text-success"
            onClick={handleEdit}
          >
            <i className="fas fa-pen"></i>
          </span>
          <span
            style={{ cursor: "pointer" }}
            className="me-3 text-danger"
            onClick={handleDelete}
          >
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}