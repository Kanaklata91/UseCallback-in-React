import React, { memo, useMemo } from 'react';

const Button = memo(({ handleEvent, name1 }) => {
  console.log(`${name1} rendered`);

  return (
    <div>
      <button onClick={handleEvent}>{name1}</button>
    </div>
  );
});
export default Button;
