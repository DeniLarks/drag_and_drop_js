(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DragAndDrop =
/*#__PURE__*/
function () {
  function DragAndDrop(elementSelector) {
    var _this = this;

    _classCallCheck(this, DragAndDrop);

    this._elements = document.querySelectorAll(elementSelector);
    if (this._elements.length > 1) this._elements.forEach(function (el) {
      return _this._dragAndDrop(el);
    });else if (this._elements.length == 1) this._dragAndDrop(this._elements[0]);
  }

  _createClass(DragAndDrop, [{
    key: "_dragAndDrop",
    value: function _dragAndDrop(element) {
      element.addEventListener('mousedown', function (e) {
        var target = e.currentTarget;
        target.style.position = 'absolute';
        var offsetX = e.clientX - target.getBoundingClientRect().left;
        var offsetY = e.clientY - target.getBoundingClientRect().top;
        document.addEventListener('mousemove', moveMouse);
        document.addEventListener('mouseup', function () {
          return document.removeEventListener('mousemove', moveMouse);
        });

        function moveMouse(e) {
          var x = e.pageX - offsetX;
          var y = e.pageY - offsetY;
          target.style.top = y + 'px';
          target.style.left = x + 'px';
        }
      });
    }
  }]);

  return DragAndDrop;
}();

var _default = DragAndDrop;
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _dragAndDrop = _interopRequireDefault(require("./dragAndDrop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _dragAndDrop["default"]('.box-drop');

},{"./dragAndDrop":1}]},{},[2])

//# sourceMappingURL=index.js.map
