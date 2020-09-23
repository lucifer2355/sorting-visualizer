import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import * as createArrayAction from "../store/actions";

const CreateArray = (props) => {
  const dispatch = useDispatch();
  const [array, setArray] = useState(props.array.array);

  const genrateArray = useCallback(async () => {
    let rndArray = [];
    for (let i = 1; i <= 100; i++) {
      rndArray.push(Math.floor(Math.random() * 100 + 1));
    }

    try {
      await dispatch(createArrayAction.createArray(rndArray));
      setArray(rndArray);
    } catch (error) {
      console.log("Create Array Error", error);
    }
  }, [dispatch]);

  useEffect(() => {
    genrateArray();
  }, []);

  return (
    <div className='arrlist'>
      {array.map((item, index) => (
        <div key={index} className='arrlist__item'>
          {item}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    array: state.array,
  };
};

export default connect(mapStateToProps)(CreateArray);
