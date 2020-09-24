import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

const MergeSort = ({ array, index }) => {
  const mergeSort = () => {
    let arr = array;
    let t = 1;
    const time = 10;
  };
  return (
    <div className='bubblesort'>
      <Button variant='contained' color='secondary' onClick={mergeSort}>
        Merge Sort
      </Button>
    </div>
  );
};

const mapStateToProps = ({ array }) => {
  return {
    array: array.array,
    index: array.index,
  };
};

export default connect(mapStateToProps)(MergeSort);
