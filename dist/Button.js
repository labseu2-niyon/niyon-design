"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  width: ", ";\n  background: none;\n  border: ", ";\n  color: ", ";\n  border-radius: 25px;\n  transition: border 400ms, background 400ms, color 400ms;\n  cursor: pointer;\n\n  &:hover {\n    border: ", ";\n    color: ", ";\n    background: #f9f9f9;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  width: ", ";\n  background: ", ";\n  border: none;\n  color: white;\n  border-radius: 25px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  transition: transform 400ms, background 400ms;\n  cursor: pointer;\n\n  &:hover {\n    background: ", ";\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  width: ", ";\n  background: ", ";\n  border: none;\n  color: white;\n  border-radius: 25px;\n  transition: background 400ms;\n  cursor: pointer;\n\n  &:hover {\n    background: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var B = _styledComponents["default"].button(_templateObject(), function (_ref) {
  var width = _ref.width;
  return width || "150px";
}, function (_ref2) {
  var themeColor = _ref2.themeColor;
  return "".concat(themeColor);
}, function (_ref3) {
  var themeColor = _ref3.themeColor;
  return "".concat((0, _polished.darken)(0.2, themeColor));
});

var BRaised = _styledComponents["default"].button(_templateObject2(), function (_ref4) {
  var width = _ref4.width;
  return width || "150px";
}, function (_ref5) {
  var themeColor = _ref5.themeColor;
  return "".concat(themeColor);
}, function (_ref6) {
  var themeColor = _ref6.themeColor;
  return "".concat((0, _polished.darken)(0.2, themeColor));
});

var BOutline = _styledComponents["default"].button(_templateObject3(), function (_ref7) {
  var width = _ref7.width;
  return width || "150px";
}, function (_ref8) {
  var themeColor = _ref8.themeColor;
  return "1px solid ".concat(themeColor);
}, function (_ref9) {
  var themeColor = _ref9.themeColor;
  return "".concat(themeColor);
}, function (_ref10) {
  var themeColor = _ref10.themeColor;
  return "1px solid ".concat((0, _polished.darken)(0.2, themeColor));
}, function (_ref11) {
  var themeColor = _ref11.themeColor;
  return "".concat((0, _polished.darken)(0.2, themeColor));
});

var getColor = {
  primary: "#042f4b",
  secondary: "#ed1250"
};

function Button(props) {
  var children = props.children,
      customStyles = props.customStyles,
      outline = props.outline,
      variant = props.variant,
      raised = props.raised;
  var color = getColor[variant || "primary"];

  if (raised) {
    return _react["default"].createElement(BRaised, _extends({
      type: "button"
    }, props, {
      themeColor: color
    }, customStyles), children.toUpperCase());
  }

  if (outline) {
    return _react["default"].createElement(BOutline, _extends({
      type: "button"
    }, props, {
      themeColor: color
    }, customStyles), children.toUpperCase());
  }

  return _react["default"].createElement(B, _extends({
    type: "button"
  }, props, {
    themeColor: color
  }, customStyles), children.toUpperCase());
}

var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CdXR0b24uanN4Il0sIm5hbWVzIjpbIkIiLCJzdHlsZWQiLCJidXR0b24iLCJ3aWR0aCIsInRoZW1lQ29sb3IiLCJCUmFpc2VkIiwiQk91dGxpbmUiLCJnZXRDb2xvciIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJCdXR0b24iLCJwcm9wcyIsImNoaWxkcmVuIiwiY3VzdG9tU3R5bGVzIiwib3V0bGluZSIsInZhcmlhbnQiLCJyYWlzZWQiLCJjb2xvciIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsQ0FBQyxHQUFHQyw2QkFBT0MsTUFBVixvQkFFSTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssSUFBSSxPQUF4QjtBQUFBLENBRkosRUFHUztBQUFBLE1BQUdDLFVBQUgsU0FBR0EsVUFBSDtBQUFBLG1CQUF1QkEsVUFBdkI7QUFBQSxDQUhULEVBV1c7QUFBQSxNQUFHQSxVQUFILFNBQUdBLFVBQUg7QUFBQSxtQkFBdUIsc0JBQU8sR0FBUCxFQUFZQSxVQUFaLENBQXZCO0FBQUEsQ0FYWCxDQUFQOztBQWVBLElBQU1DLE9BQU8sR0FBR0osNkJBQU9DLE1BQVYscUJBRUY7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLElBQUksT0FBeEI7QUFBQSxDQUZFLEVBR0c7QUFBQSxNQUFHQyxVQUFILFNBQUdBLFVBQUg7QUFBQSxtQkFBdUJBLFVBQXZCO0FBQUEsQ0FISCxFQVlLO0FBQUEsTUFBR0EsVUFBSCxTQUFHQSxVQUFIO0FBQUEsbUJBQXVCLHNCQUFPLEdBQVAsRUFBWUEsVUFBWixDQUF2QjtBQUFBLENBWkwsQ0FBYjs7QUFrQkEsSUFBTUUsUUFBUSxHQUFHTCw2QkFBT0MsTUFBVixxQkFFSDtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssSUFBSSxPQUF4QjtBQUFBLENBRkcsRUFJRjtBQUFBLE1BQUdDLFVBQUgsU0FBR0EsVUFBSDtBQUFBLDZCQUFpQ0EsVUFBakM7QUFBQSxDQUpFLEVBS0g7QUFBQSxNQUFHQSxVQUFILFNBQUdBLFVBQUg7QUFBQSxtQkFBdUJBLFVBQXZCO0FBQUEsQ0FMRyxFQVdBO0FBQUEsTUFBR0EsVUFBSCxVQUFHQSxVQUFIO0FBQUEsNkJBQWlDLHNCQUFPLEdBQVAsRUFBWUEsVUFBWixDQUFqQztBQUFBLENBWEEsRUFZRDtBQUFBLE1BQUdBLFVBQUgsVUFBR0EsVUFBSDtBQUFBLG1CQUF1QixzQkFBTyxHQUFQLEVBQVlBLFVBQVosQ0FBdkI7QUFBQSxDQVpDLENBQWQ7O0FBaUJBLElBQU1HLFFBQVEsR0FBRztBQUNmQyxFQUFBQSxPQUFPLEVBQUUsU0FETTtBQUVmQyxFQUFBQSxTQUFTLEVBQUU7QUFGSSxDQUFqQjs7QUFLQSxTQUFTQyxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBLE1BQ2JDLFFBRGEsR0FDd0NELEtBRHhDLENBQ2JDLFFBRGE7QUFBQSxNQUNIQyxZQURHLEdBQ3dDRixLQUR4QyxDQUNIRSxZQURHO0FBQUEsTUFDV0MsT0FEWCxHQUN3Q0gsS0FEeEMsQ0FDV0csT0FEWDtBQUFBLE1BQ29CQyxPQURwQixHQUN3Q0osS0FEeEMsQ0FDb0JJLE9BRHBCO0FBQUEsTUFDNkJDLE1BRDdCLEdBQ3dDTCxLQUR4QyxDQUM2QkssTUFEN0I7QUFFckIsTUFBTUMsS0FBSyxHQUFHVixRQUFRLENBQUNRLE9BQU8sSUFBSSxTQUFaLENBQXRCOztBQUVBLE1BQUlDLE1BQUosRUFBWTtBQUNWLFdBQ0UsZ0NBQUMsT0FBRDtBQUFTLE1BQUEsSUFBSSxFQUFDO0FBQWQsT0FBMkJMLEtBQTNCO0FBQWtDLE1BQUEsVUFBVSxFQUFFTTtBQUE5QyxPQUF5REosWUFBekQsR0FDR0QsUUFBUSxDQUFDTSxXQUFULEVBREgsQ0FERjtBQUtEOztBQUVELE1BQUlKLE9BQUosRUFBYTtBQUNYLFdBQ0UsZ0NBQUMsUUFBRDtBQUFVLE1BQUEsSUFBSSxFQUFDO0FBQWYsT0FBNEJILEtBQTVCO0FBQW1DLE1BQUEsVUFBVSxFQUFFTTtBQUEvQyxPQUEwREosWUFBMUQsR0FDR0QsUUFBUSxDQUFDTSxXQUFULEVBREgsQ0FERjtBQUtEOztBQUVELFNBQ0UsZ0NBQUMsQ0FBRDtBQUFHLElBQUEsSUFBSSxFQUFDO0FBQVIsS0FBcUJQLEtBQXJCO0FBQTRCLElBQUEsVUFBVSxFQUFFTTtBQUF4QyxLQUFtREosWUFBbkQsR0FDR0QsUUFBUSxDQUFDTSxXQUFULEVBREgsQ0FERjtBQUtEOztlQUVjUixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gXCJwb2xpc2hlZFwiO1xuXG5jb25zdCBCID0gc3R5bGVkLmJ1dHRvbmBcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aCB8fCBcIjE1MHB4XCJ9O1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lQ29sb3IgfSkgPT4gYCR7dGhlbWVDb2xvcn1gfTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNDAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lQ29sb3IgfSkgPT4gYCR7ZGFya2VuKDAuMiwgdGhlbWVDb2xvcil9YH07XG4gIH1cbmA7XG5cbmNvbnN0IEJSYWlzZWQgPSBzdHlsZWQuYnV0dG9uYFxuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAkeyh7IHdpZHRoIH0pID0+IHdpZHRoIHx8IFwiMTUwcHhcIn07XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWVDb2xvciB9KSA9PiBgJHt0aGVtZUNvbG9yfWB9O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcywgYmFja2dyb3VuZCA0MDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWVDb2xvciB9KSA9PiBgJHtkYXJrZW4oMC4yLCB0aGVtZUNvbG9yKX1gfTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cbmA7XG5cbmNvbnN0IEJPdXRsaW5lID0gc3R5bGVkLmJ1dHRvbmBcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aCB8fCBcIjE1MHB4XCJ9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6ICR7KHsgdGhlbWVDb2xvciB9KSA9PiBgMXB4IHNvbGlkICR7dGhlbWVDb2xvcn1gfTtcbiAgY29sb3I6ICR7KHsgdGhlbWVDb2xvciB9KSA9PiBgJHt0aGVtZUNvbG9yfWB9O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXIgNDAwbXMsIGJhY2tncm91bmQgNDAwbXMsIGNvbG9yIDQwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyOiAkeyh7IHRoZW1lQ29sb3IgfSkgPT4gYDFweCBzb2xpZCAke2RhcmtlbigwLjIsIHRoZW1lQ29sb3IpfWB9O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lQ29sb3IgfSkgPT4gYCR7ZGFya2VuKDAuMiwgdGhlbWVDb2xvcil9YH07XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgfVxuYDtcblxuY29uc3QgZ2V0Q29sb3IgPSB7XG4gIHByaW1hcnk6IFwiIzA0MmY0YlwiLFxuICBzZWNvbmRhcnk6IFwiI2VkMTI1MFwiXG59O1xuXG5mdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY3VzdG9tU3R5bGVzLCBvdXRsaW5lLCB2YXJpYW50LCByYWlzZWQgfSA9IHByb3BzO1xuICBjb25zdCBjb2xvciA9IGdldENvbG9yW3ZhcmlhbnQgfHwgXCJwcmltYXJ5XCJdO1xuXG4gIGlmIChyYWlzZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJSYWlzZWQgdHlwZT1cImJ1dHRvblwiIHsuLi5wcm9wc30gdGhlbWVDb2xvcj17Y29sb3J9IHsuLi5jdXN0b21TdHlsZXN9PlxuICAgICAgICB7Y2hpbGRyZW4udG9VcHBlckNhc2UoKX1cbiAgICAgIDwvQlJhaXNlZD5cbiAgICApO1xuICB9XG5cbiAgaWYgKG91dGxpbmUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJPdXRsaW5lIHR5cGU9XCJidXR0b25cIiB7Li4ucHJvcHN9IHRoZW1lQ29sb3I9e2NvbG9yfSB7Li4uY3VzdG9tU3R5bGVzfT5cbiAgICAgICAge2NoaWxkcmVuLnRvVXBwZXJDYXNlKCl9XG4gICAgICA8L0JPdXRsaW5lPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCIHR5cGU9XCJidXR0b25cIiB7Li4ucHJvcHN9IHRoZW1lQ29sb3I9e2NvbG9yfSB7Li4uY3VzdG9tU3R5bGVzfT5cbiAgICAgIHtjaGlsZHJlbi50b1VwcGVyQ2FzZSgpfVxuICAgIDwvQj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19