import React from "react";

import BubbleSort from "./components/BubbleSort";
import CreateArray from "./components/CreateArray";
import MergeSort from "./components/MergeSort";

function App() {
  return (
    <div className='app'>
      <CreateArray />
      {/* <BubbleSort /> */}
      <MergeSort />
    </div>
  );
}

export default App;
