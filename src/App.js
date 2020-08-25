import React, { useState } from 'react';
import './App.css';
import { readCard } from './card';
import Edit from './Edit';
import Show from './Show';
const card = readCard();

function App() {
  const [edit, setEdit] = useState(true);

  const switchView = (ev) => {
    ev.stopPropagation();
    setEdit(!edit);
  };

  return (
    <>
      <button onClick={switchView} className="noPrint">
        {edit ? 'Show' : 'Edit'}
      </button>
      {edit ? <Edit card={card} /> : <Show card={card} />}
    </>
  );
}

export default App;
