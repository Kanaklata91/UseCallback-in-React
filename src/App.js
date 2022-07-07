import React, { useState, useCallback, useMemo } from 'react';
import './style.css';
import Button from './Button';

var functionSet = new Set();
export default function App() {
  console.log('Counter rendered.');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const useMemoisedCallback1 = useCallback(
    () => setCount1(count1 + 1),
    [count1]
  );
  const useMemoisedCallback2 = useCallback(
    () => setCount2(count2 + 1),
    [count2]
  );

  functionSet.add(useMemoisedCallback1);
  functionSet.add(useMemoisedCallback2);

  console.log(functionSet);

  return (
    <div>
      {/* {count1} - {count2}
      <Button handleEvent={useMemoisedCallback1} name1="button1"></Button>
      <Button handleEvent={useMemoisedCallback2} name1="button2"></Button> */}
      {count1} : {count2}
      <br /> <br />
      <button onClick={useMemoisedCallback1}>Button 1</button>
      <button onClick={useMemoisedCallback2}>Button 2</button>
    </div>
  );
}
