import React from 'react';
import './modal.scss';

/**
 * Reusable Modal window component.
 *
 * @component
 * @param {Object} props - The properties for the Modal component.
 * @param {string} props.title - The title of the modal window.
  * @param {(string|ReactNode)} props.content - The content of the modal window, which can be a string or a React component.
 * @param {boolean} props.show - Indicates whether the modal window should be displayed.
 * @param {Function} props.close - The function to close the modal window.
 * @param {Object} props.customClassName - Custom CSS classes for styling the modal window.
 * @param {string} props.customClassName.closeBtn - CSS class name for the close button.
 * @param {string} props.customClassName.modal - CSS class name for the modal window itself.
 * @param {string} props.customClassName.title - CSS class name for the title of the modal window.
 * @param {string} props.customClassName.content - CSS class name for the content of the modal window.
 * @param {ReactNode} [props.children] - Child components to be displayed inside the modal window.
 * @returns {JSX.Element} - The Modal component.
 */
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
    <div
      className={`modal-container-react-modal-library ${show ? 'show' : ''}`}
    >
      <div
        className={`modal-react-modal-library ${
          customClassName.modal ? customClassName.modal : 'modal-options'
        }`}
      >
        <button
          className={`close-modal-react-modal-library ${
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
