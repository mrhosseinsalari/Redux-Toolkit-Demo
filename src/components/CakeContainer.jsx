import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../features/cake/cakeSlice";

function CakeContainer() {
  const [value, setValue] = useState(1);

  // 1. accepts a function as its parameters : selector function
  // 2. useSelector hooks return whatever returns by selector function
  const cake = useSelector((state) => state.cake);

  // returns a reference to the dispatch function in redux store
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cake Number : {cake.numOfCakes}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(value))}>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;
