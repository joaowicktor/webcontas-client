import React from 'react';
import { NavLink } from 'react-router-dom';

import { StyledButton } from './styles';

const DefaultButton = props => {
  const defaultProps = {
    bgcolor: props.bgColor,
    textwhite: props.textWhite ? 1 : 0,
    uppercase: props.uppercase ? 1 : 0,
    haslabel: props.label ? 1 : 0,
    fontSize: props.fontSize
  };

  return (
    <>
      {props.as === 'link' ? (
        <StyledButton as={NavLink} to={props.path} exact {...defaultProps}>
          {props.icon ? <i className={`fas ${props.icon}`}></i> : null}
          {defaultProps.haslabel ? <span>{props.label}</span> : null}
        </StyledButton>
      ) : (
        <StyledButton {...defaultProps} onClick={props.onClick}>
          {props.icon ? <i className={`fas ${props.icon}`}></i> : null}
          {defaultProps.haslabel ? <span>{props.label}</span> : null}
        </StyledButton>
      )}
    </>
  );
};

export default DefaultButton;
