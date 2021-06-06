import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    //destructuring
    const { items, clearList, handleDelete, handleEdit, boxClick } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center"> my todo list</h3>
        {
          //the curly bracket is because I am writing a jsx
          // the map method is used to loop through the whole array being passed
          items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => {
                  handleDelete(item.id);
                }}
                handleEdit={() => {
                  handleEdit(item.id);
                }}
                boxClick={() => {
                  boxClick(item.id);
                }}
              />
            );
          })
        }
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          disabled={items == ""}
          onClick={clearList}
        >
          clear my todo list
        </button>
      </ul>
    );
  }
}
