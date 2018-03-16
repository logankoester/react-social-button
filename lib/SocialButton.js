'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var SocialButton = function SocialButton(props) {
  return _react2['default'].createElement(
    _reactBootstrap.Button,
    _extends({}, props.btnProps, {
      className: 'btn-social' + (props.text === null ? '-icon' : '') + ' btn-' + props.social }),
    props.loading ? _react2['default'].createElement(
      'span',
      null,
      _react2['default'].createElement('span', { className: 'fa fa-spinner fa-pulse' })
    ) : _react2['default'].createElement('span', { className: 'fa fa-' + props.social }),
    props.text === null ? '' : props.text
  );
};

SocialButton.displayName = 'SocialButton';

SocialButton.propTypes = {
  social: _propTypes2['default'].string.isRequired,
  text: _propTypes2['default'].string,
  loading: _propTypes2['default'].bool,
  btnProps: _propTypes2['default'].object
};

SocialButton.defaultProps = {
  text: null,
  loading: false
};

exports['default'] = SocialButton;
module.exports = exports['default'];