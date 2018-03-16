'use strict';

import React from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

let SocialButton = (props) => (
  <Button
    {...props.btnProps}
    className={`btn-social${props.text === null ? '-icon' : ''} btn-${props.social}`}>
      {props.loading ? <span><span className={`fa fa-spinner fa-pulse`}></span></span> : <span className={`fa fa-${props.social}`}></span>}
      {props.text === null ? '' : props.text}
  </Button>
);

SocialButton.displayName = 'SocialButton';

SocialButton.propTypes = {
  social: PropTypes.string.isRequired,
  text: PropTypes.string,
  loading: PropTypes.bool,
  btnProps: PropTypes.object
};

SocialButton.defaultProps = {
  text: null,
  loading: false
};

export default SocialButton;
