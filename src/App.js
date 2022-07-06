import React, { useState, useCallback, useMemo } from 'react';
import './style.css';
import Button from './Button';

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

  return (
    <div>
      {count1} - {count2}
      <Button handleEvent={useMemoisedCallback1} name1="button1"></Button>
      <Button handleEvent={useMemoisedCallback2} name1="button2"></Button>
    </div>
  );
}
