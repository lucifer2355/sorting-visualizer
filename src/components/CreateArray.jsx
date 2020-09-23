import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import * as createArrayAction from "../store/actions";

const CreateArray = (props) => {
  const dispatch = useDispatch();
  // const [array, setArray] = useState(props.array.array);

  const genrateArray = useCallback(async () => {
    let rndArray = [];
    for (let i = 1; i <= 60; i++) {
      rndArray.push(Math.floor(Math.random() * 100) + 1);
    }
    await dispatch(createArrayAction.createArray(rndArray));
  }, [dispatch]);

  useEffect(() => {
    genrateArray();
  }, []);

  return (
    <div className='arrlist'>
      {props.array.map((item, index) => (
        <div
          key={index}
          className='arrlist__item'
          style={{
            height: `${item * 3}px`,
            background: props.index.includes(index) ? "#f66d12" : "#1283f6",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    array: state.array.array,
    index: state.array.index,
  };
};

export default connect(mapStateToProps)(CreateArray);
