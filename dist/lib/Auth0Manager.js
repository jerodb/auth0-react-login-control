"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth0Js = _interopRequireDefault(require("auth0-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AUTH_CLIENT_ID = 'ehvWV6IvuPlANICzvSOR6f2mZTt2h1rd';
var AUTH_DOMAIN = 'playnews.auth0.com';
var AUTH_RESPONSE_TYPE = 'token id_token';
var AUTH_REDIRECT_URI = 'http://localhost:3000/auth/callback';
var AUTH_SCOPE = 'openid profile email';

var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    _classCallCheck(this, Auth);

    _defineProperty(this, "auth0", new _auth0Js["default"].WebAuth({
      domain: AUTH_DOMAIN,
      clientID: AUTH_CLIENT_ID,
      redirectUri: AUTH_REDIRECT_URI,
      responseType: AUTH_RESPONSE_TYPE,
      scope: AUTH_SCOPE
    }));

    _defineProperty(this, "isAuthenticated", function (expiresAt) {
      return new Date().getTime() < expiresAt;
    });

    _defineProperty(this, "setSession", function (authResult) {
      return new Promise(function (resolve) {
        var idTokenPayload = authResult.idTokenPayload,
            expiresIn = authResult.expiresIn,
            accessToken = authResult.accessToken,
            idToken = authResult.idToken; // Set isLoggedIn flag in localStorage

        localStorage.setItem('isLoggedIn', 'true'); // Set the time that the Access Token will expire at

        var expiresAt = expiresIn * 1000 + new Date().getTime();
        var email = idTokenPayload.email,
            email_verified = idTokenPayload.email_verified,
            nickname = idTokenPayload.nickname,
            picture = idTokenPayload.picture,
            sub = idTokenPayload.sub;

        var _sub$split = sub.split('|'),
            _sub$split2 = _slicedToArray(_sub$split, 2),
            userId = _sub$split2[1];

        resolve({
          accessToken: accessToken,
          email: email,
          emailVerified: email_verified,
          expiresAt: expiresAt,
          idToken: idToken,
          picture: picture,
          userId: userId,
          userName: nickname
        });
      });
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  _createClass(Auth, [{
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      return new Promise(function (resolve) {
        _this.auth0.parseHash(
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(err, authResult) {
            var session;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(authResult && authResult.accessToken && authResult.idToken)) {
                      _context.next = 5;
                      break;
                    }

                    _context.next = 3;
                    return _this.setSession(authResult);

                  case 3:
                    session = _context.sent;
                    return _context.abrupt("return", resolve(session));

                  case 5:
                    if (err) {
                      // eslint-disable-next-line no-console
                      console.log('auth0.parseHash Error: ', err);
                    }

                    return _context.abrupt("return", resolve(err));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      });
    }
  }, {
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: "logout",
    value: function logout() {
      // Remove isLoggedIn flag from localStorage
      localStorage.removeItem('isLoggedIn'); // Auth0 needs to redirect after logout.

      this.auth0.logout({
        returnTo: window.location.origin
      });
    }
  }, {
    key: "renewSession",
    value: function renewSession() {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.auth0.checkSession({},
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2(err, authResult) {
            var session;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(authResult && authResult.accessToken && authResult.idToken)) {
                      _context2.next = 5;
                      break;
                    }

                    _context2.next = 3;
                    return _this2.setSession(authResult);

                  case 3:
                    session = _context2.sent;
                    return _context2.abrupt("return", resolve(session));

                  case 5:
                    if (err) {
                      // eslint-disable-next-line no-console
                      console.log('auth0.checkSession Error: ', err); // eslint-disable-next-line no-alert

                      alert("Could not get a new token (".concat(err.error, ": ").concat(err.error_description, ")."));
                    }

                    _this2.logout();

                    return _context2.abrupt("return", resolve(null));

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      });
    }
  }]);

  return Auth;
}();

exports["default"] = Auth;