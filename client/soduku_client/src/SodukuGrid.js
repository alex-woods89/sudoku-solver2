import React, { useState } from 'react';
import Row from './Row.js';

const SodukuGrid = () => {
  const [state, setState] = useState({});

  const onChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setup();
  };

  const setup = () => {
    let initialState = {};
    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        initialState = { ...initialState, [`${i}-${j}`]: 0 };
      }
    }
    setState(initialState);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <Row onChange={onChange} rowId="1" />
        <Row onChange={onChange} rowId="2" />
        <Row onChange={onChange} rowId="3" />
        <Row onChange={onChange} rowId="4" />
        <Row onChange={onChange} rowId="5" />
        <Row onChange={onChange} rowId="6" />
        <Row onChange={onChange} rowId="7" />
        <Row onChange={onChange} rowId="8" />
        <Row onChange={onChange} rowId="9" />
        <input type="submit" value="Go" />
      </form>
    </div>
  );
};

export default SodukuGrid;
