"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Activity = _interopRequireDefault(require("./Activity"));

var _LoggedInView = _interopRequireDefault(require("./LoggedInView"));

var _LoggedOutView = _interopRequireDefault(require("./LoggedOutView"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LoginControlComponent = function LoginControlComponent(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      login = _ref.login,
      logout = _ref.logout,
      menuList = _ref.menuList,
      picture = _ref.picture,
      userName = _ref.userName;
  var classes = (0, _styles["default"])();

  if (picture && userName) {
    return _react["default"].createElement(_LoggedInView["default"], {
      logout: logout,
      menuList: menuList,
      picture: picture,
      userName: userName
    });
  }

  if (isLoggedIn) {
    return _react["default"].createElement("div", {
      className: classes.activity
    }, _react["default"].createElement(_Activity["default"], null));
  }

  return _react["default"].createElement(_LoggedOutView["default"], {
    login: login
  });
};

var _default = LoginControlComponent;
exports["default"] = _default;