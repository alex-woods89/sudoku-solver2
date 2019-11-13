import React from 'react';

const Row = props => {
  return (
    <div className="form-row">
      <input
        type="number"
        name={`${props.rowId}-1`}
        onChange={props.onChange}
      ></input>
      <input
        type="number"
        name={`${props.rowId}-2`}
        onChange={props.onChange}
      ></input>
      <input
        type="number"
        name={`${props.rowId}-3`}
        onChange={props.onChange}
      ></input>
      <input
        type="number"
        name={`${props.rowId}-4`}
        onChange={props.onChange}
      ></input>
      <input
        type="number"
        name={`${props.rowId}-5`}
        onChange={props.onChange}
      ></input>
      <input
        type="number"
        name={`${props.rowId}-6`}
        onChange={props.onChange}
      ></input>
      <input
        type="number"
        name={`${props.rowId}-7`}
        onChange={props.onChange}
      ></input>
      <input
        type="number"
        name={`${props.rowId}-8`}
        onChange={props.onChange}
      ></input>
      <input
        type="number"
        name={`${props.rowId}-9`}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default Row;
