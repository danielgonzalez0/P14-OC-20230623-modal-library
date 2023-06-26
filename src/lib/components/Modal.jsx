import React from 'react';
import './modal.scss';

const Modal = (props) => {
  const { title = 'insert title', content = 'insert content' } = props;
  const { show, close } = props;
  const {
    customClassName = {
      closeBtn: 'close-modal-options',
      modal: 'modal-options',
      title: '',
      content: '',
    },
  } = props;

  return (
    <div className={`modal-container ${show ? 'show' : ''}`}>
      <div
        className={`modal ${
          customClassName.modal ? customClassName.modal : 'modal-options'
        }`}
      >
        <button
          className={`close-modal ${
            customClassName.closeBtn
              ? customClassName.closeBtn
              : 'close-modal-options'
          }`}
          onClick={close}
        >
          X
        </button>
        <div className={customClassName.title}>{title}</div>
        <div className={customClassName.content}>{content}</div>
      </div>
      {props.children}
    </div>
  );
};

export default Modal;
