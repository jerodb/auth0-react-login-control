"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LoggedOutView = function LoggedOutView(_ref) {
  var login = _ref.login;
  var classes = (0, _styles["default"])();
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button["default"], {
    className: classes.login,
    onClick: login
  }, "Log In"));
};

var _default = LoggedOutView;
exports["default"] = _default;