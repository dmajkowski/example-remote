import React from 'react';

const Clicker = ({hostState, setHostState}) => {
  return (
    <footer>
        <p>hostState: {hostState}</p>
      Remote - clicker
      <button onClick={()=>setHostState(prevState=>prevState+1)}>Add to host state</button>
      <button onClick={()=>setHostState(prevState=>prevState-1)}>Take from host state</button>
    </footer>
  );
}

export default Clicker;