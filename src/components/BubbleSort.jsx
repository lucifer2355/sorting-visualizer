import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import * as createArrayAction from "../store/actions";

const BubbleSort = (props) => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState();

  const bubbleSort = async () => {
    let arr = props.array.array;
    let t = 1;
    const time = 10;

    for (let i = 0; i < arr.length; i++) {
      let outerEl = arr[i];

      for (let j = i; j < arr.length; j++) {
        let innerEl = arr[j];

        if (outerEl > innerEl) {
          arr[i] = innerEl;
          arr[j] = outerEl;

          outerEl = arr[i];
          innerEl = arr[j];
        }

        setTimeout(
          async (arr, index) => {
            await dispatch(createArrayAction.createArray(arr));
            setIndex(index);
          },
          t * time,
          [...arr],
          [j, j + 1]
        );
        t++;
      }
      setTimeout(() => {
        setIndex();
        let indices = [];
        let i = 0;
        for (i = 0; i < props.array.array.length; i++) {
          indices.push(i);
          setTimeout((indices) => setIndex(indices), i * time, [...indices]);
        }
      }, t * time);
    }
  };

  return (
    <div className='bubblesort'>
      <Button variant='contained' color='secondary' onClick={bubbleSort}>
        Bubble Sort
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    array: state.array,
    index: state.array.index,
  };
};

export default connect(mapStateToProps)(BubbleSort);
