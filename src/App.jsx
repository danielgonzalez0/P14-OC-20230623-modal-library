import React, { useState } from 'react';
import Modal from './lib/components/Modal';
import Content from './Content';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="wrapper">
        <p>click to show Modal</p>
        <button onClick={() => setIsOpen(true)} className="btn">
          Show modal
        </button>
        <Modal
          close={() => setIsOpen(false)}
          show={isOpen}
          title={'Selected employee:'}
          content={<Content/>}
          customClassName={{
            closeBtn: 'custom-btn',
            modal: 'custom-modal',
            title: 'custom-title',
            content: 'custom-modal-content',
          }}
        />
      </div>
    </>
  );
};

export default App;
