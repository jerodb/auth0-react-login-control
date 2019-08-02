"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Auth0Manager = _interopRequireDefault(require("../../lib/Auth0Manager"));

var _LoginControlComponent = _interopRequireDefault(require("./LoginControlComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function LoginControlContainer(_ref) {
  var _ref$menuList = _ref.menuList,
      menuList = _ref$menuList === void 0 ? [] : _ref$menuList,
      _ref$onLogOut = _ref.onLogOut,
      onLogOut = _ref$onLogOut === void 0 ? null : _ref$onLogOut,
      _ref$onSetSession = _ref.onSetSession,
      onSetSession = _ref$onSetSession === void 0 ? null : _ref$onSetSession;
  var AuthManager = new _Auth0Manager["default"]();
  var isClient = typeof window !== 'undefined' && window.document;
  var isLoggedIn = isClient ? localStorage.getItem('isLoggedIn') === 'true' : false;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      expiresAt = _useState2[0],
      setExpiresAt = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      picture = _useState4[0],
      setPicture = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      userName = _useState6[0],
      setUserName = _useState6[1];

  (0, _react.useEffect)(function () {
    if (expiresAt && !AuthManager.isAuthenticated(expiresAt)) {
      logout();
    }

    if (isLoggedIn) {
      var renewSession =
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", AuthManager.renewSession());

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function renewSession() {
          return _ref2.apply(this, arguments);
        };
      }();

      renewSession().then(function (session) {
        if (session) {
          setExpiresAt(session.expiresAt);
          setPicture(session.picture);
          setUserName(session.userName);
        }

        if (onSetSession) onSetSession(session);
      });
    }
  }, []);

  var login = function login() {
    return AuthManager.login();
  };

  var logout = function logout() {
    if (onLogOut) onLogOut();
    AuthManager.logout();
  };

  return _react["default"].createElement(_LoginControlComponent["default"], {
    isLoggedIn: isLoggedIn,
    login: login,
    logout: logout,
    menuList: menuList,
    picture: picture,
    userName: userName
  });
}

var _default = LoginControlContainer;
exports["default"] = _default;