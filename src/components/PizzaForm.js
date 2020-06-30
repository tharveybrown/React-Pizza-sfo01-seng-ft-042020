import React from "react";

const PizzaForm = ({ pizza, handleInputChange, handleSubmit }) => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          onChange={handleInputChange}
          name="topping"
          placeholder="Pizza Topping"
          value={
            //Pizza Topping Should Go Here
            pizza.topping
          }
        />
      </div>
      <div className="col">
        <select
          name="size"
          value={pizza.size}
          className="form-control"
          onChange={handleInputChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            name="vegetarian"
            onChange={handleInputChange}
            className="form-check-input"
            type="radio"
            value="Vegetarian"
            checked={pizza.vegetarian}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            name="vegetarian"
            className="form-check-input"
            type="radio"
            onChange={handleInputChange}
            value="Not Vegetarian"
            checked={pizza.vegetarian === false ? true : null}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
