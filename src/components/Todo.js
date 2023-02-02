import React, { useState } from "react";
import todo from "../assets/images/todo.svg";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItems = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    console.log(id);
    const updatedItems = items.filter((elem, index) => {
      return index !== id;
    });
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="mainDiv">
        <div className="childDiv">
          <figure>
            <img src={todo} alt="todoLogo" />
            <figcaption>Add Your List Here ✌️</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={addItems}
            ></i>
          </div>
          <div className="showItems">
            {items.map((elem, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{elem}</h3>
                  <i
                    className=" far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => deleteItem(index)}
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
