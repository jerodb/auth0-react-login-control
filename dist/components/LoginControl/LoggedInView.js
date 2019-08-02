"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _AccountCircle = _interopRequireDefault(require("@material-ui/icons/AccountCircle"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LoggedInView = function LoggedInView(_ref) {
  var logout = _ref.logout,
      menuList = _ref.menuList,
      picture = _ref.picture,
      userName = _ref.userName;
  var classes = (0, _styles["default"])();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_IconButton["default"], {
    "aria-label": "account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    onClick: handleMenu,
    color: "inherit",
    className: classes.iconButton
  }, picture && _react["default"].createElement("img", {
    className: classes.pic,
    src: picture,
    alt: ""
  }) || _react["default"].createElement(_AccountCircle["default"], null)), _react["default"].createElement(_Menu["default"], {
    id: "menu-appbar",
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    keepMounted: true,
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    open: open,
    onClose: handleClose
  }, _react["default"].createElement("div", {
    className: classes.userMenu
  }, _react["default"].createElement("div", {
    className: classes.userName
  }, "".concat(userName)), menuList.map(function (el, index) {
    return _react["default"].createElement(_MenuItem["default"], {
      key: JSON.stringify(index),
      onClick: el.onCLick
    }, el.name);
  }), _react["default"].createElement(_MenuItem["default"], {
    onClick: logout
  }, "Log Out"))));
};

var _default = LoggedInView;
exports["default"] = _default;