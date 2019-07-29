import React, { useState } from 'react';
import Accordion from './Accordion';
import './App.styl';

const App = () => {
  const [open, setOpen] = useState(false);
  const openClose = () => setOpen(v => !v);
  return (
    <div className="app">
      <button type="button" onClick={openClose}>
        open/close
      </button>
      <Accordion open={open}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </Accordion>
    </div>
  );
};

export default App;
