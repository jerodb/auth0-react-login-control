"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Auth0Manager = _interopRequireDefault(require("../lib/Auth0Manager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Callback(_ref) {
  var location = _ref.location,
      onSetSession = _ref.onSetSession;
  var AuthManager = new _Auth0Manager["default"]();
  (0, _react.useEffect)(function () {
    var handleAuthentication =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!/access_token|id_token|error/.test(location.hash)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", AuthManager.handleAuthentication());

              case 2:
                return _context.abrupt("return", null);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function handleAuthentication() {
        return _ref2.apply(this, arguments);
      };
    }();

    handleAuthentication().then(function (session) {
      if (onSetSession) onSetSession(session);
    });
  });
  return _react["default"].createElement(_react["default"].Fragment, null);
}

var _default = Callback;
exports["default"] = _default;