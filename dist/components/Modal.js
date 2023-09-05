"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = props => {
  const {
    title = 'insert title',
    content = 'insert content'
  } = props;
  const {
    show,
    close
  } = props;
  const {
    customClassName = {
      closeBtn: 'close-modal-options',
      modal: 'modal-options',
      title: '',
      content: ''
    }
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container-react-modal-library ".concat(show ? 'show' : '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-react-modal-library ".concat(customClassName.modal ? customClassName.modal : 'modal-options')
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close-modal-react-modal-library ".concat(customClassName.closeBtn ? customClassName.closeBtn : 'close-modal-options'),
    onClick: close
  }, "X"), /*#__PURE__*/_react.default.createElement("div", {
    className: customClassName.title
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: customClassName.content
  }, content)), props.children);
};
var _default = Modal;
exports.default = _default;