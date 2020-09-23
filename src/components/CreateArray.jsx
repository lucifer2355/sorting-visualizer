import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import * as createArrayAction from "../store/actions";

const CreateArray = () => {
  const dispatch = useDispatch();
  const [arr, setArr] = useState([]);
  const rndArray = [];

  const genrateArray = useCallback(async () => {
    for (let i = 1; i <= 100; i++) {
      rndArray.push(Math.floor(Math.random() * 100 + 1));
    }

    try {
      setArr(rndArray);
      await dispatch(createArrayAction.createArray(arr));
    } catch (error) {
      console.log("Create Array Error", error);
    }
  }, [dispatch, arr, rndArray]);

  useEffect(() => {
    genrateArray();
  }, []);

  return (
    <div className='arrlist'>
      {arr.map((item, index) => (
        <div key={index} className='arrlist__item'>
          {item}
        </div>
      ))}
    </div>
  );
};

export default CreateArray;
