import { css } from 'styled-components'

export default css`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 18px;
    line-height: 1.2;
    font-family:  'Nunito', sans-serif;
  }

  img {
    vertical-align: bottom;
    max-width: 100%;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  p,
  input,
  textarea,
  button
  option,
  select {
    color: #2e2e2e;
  }

  body, html, #root, .root {
    height: 100%;
  }
`
