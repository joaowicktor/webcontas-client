import React from 'react';
import styled from 'styled-components';

const LayoutApp = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
  grid-template-columns: ${props => (props.compact ? '64px' : '200px')} 1fr;
  grid-template-rows: 64px 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar page';
  transition: grid-template-columns 0.15s;
`;

export default props => {
  return <LayoutApp>{props.children}</LayoutApp>;
};
