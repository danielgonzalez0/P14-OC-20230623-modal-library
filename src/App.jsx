import React, { useState } from 'react';
import Modal from './components/Modal';

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
          content={'Daniel Gonzalez'}
          closeBtnClassName={'custom-btn'}
          modalClassName={'custom-modal'}
          modalTitleClassName={'custom-title'}
          modalContentClassName={'custom-modal-content'}
        />
      </div>
    </>
  );
};

export default App;
