import React from 'react';

const Modal = (props) => {

  const { title = 'insert title', content = 'insert content' } = props;
  const { show , close } = props;
  const {
    closeBtnClassName = 'close-modal-options',
    modalClassName = 'modal-options',
    modalTitleClassName,
    modalContentClassName,
  } = props;

  return (
    <div className={`modal-container ${show ? 'show' : ''}`}>
      <div className={`modal ${modalClassName}`}>
        <button
          className={`close-modal ${closeBtnClassName}`}
          onClick={close}
        >
          X
        </button>
        <div className={modalTitleClassName}>{title}</div>
        <div className={modalContentClassName}>{content}</div>
      </div>
      {props.children}
    </div>
  );
};

export default Modal;
