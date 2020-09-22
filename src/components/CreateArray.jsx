import React, { useEffect, useState } from "react";

const CreateArray = () => {
  const [arr, setArr] = useState([]);
  const rndArray = [];

  const genrateArray = () => {
    for (let i = 1; i <= 100; i++) {
      rndArray.push(Math.floor(Math.random() * 100 + 1));
    }

    setArr(rndArray);
  };

  useEffect(() => {
    genrateArray();
  }, []);

  return (
    <div className='arrlist'>
      {arr.map((item) => (
        <div className='arrlist__item'>{item}</div>
      ))}
    </div>
  );
};

export default CreateArray;
