import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /*--lightGreen: #bdffb6;*/
    --lightGreen: #5fb357;
    --green: #67C15E;
    --darkGreen: #529c4b;
    --light: #f5f5f5;
    --dark: #282c34;
    --grey: #8B9FAB;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: Arial, sans-serif !important;
    font-size: 14px;
    line-height: 16px;
    font-weight: normal;
    font-style: normal;
    color: #333333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f5f5f5;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button:hover {
    opacity: 0.8;
  }

  button:not(:disabled) {
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.65;
  }
`;
