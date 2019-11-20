import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.textwhite ? '#FFFFFF' : '#555555')};
  background-color: ${props => (props.bgcolor ? props.bgcolor : '#FFFFFF')};
  font-family: inherit;
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '12px')};
  font-weight: 500;
  /*margin-left: 1em;*/
  padding: 0 1.5em;
  border: 0;
  border-radius: 5px;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  text-decoration: none;

  i {
    margin-right: ${props => (props.haslabel ? '1em' : '0')};
  }

  &:hover {
    opacity: 0.8;
    transition: all 0.15s ease-out 0s;
  }
`;
