import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import * as createArrayAction from "../store/actions";

const BubbleSort = (props) => {
  const dispatch = useDispatch();

  const bubbleSort = async () => {
    let arr = props.array.array;

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
      }
      await dispatch(createArrayAction.createArray(arr));
    }
  };

  return (
    <div>
      <Button variant='contained' color='secondary' onClick={bubbleSort}>
        Disable elevation
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    array: state.array,
  };
};

export default connect(mapStateToProps)(BubbleSort);
