import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'WLFont';
    src: url('/public/fonts/Montserrat-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-display: swap;
    src: url('https://fonts.googleapis.com/css2?family=Inter') format('woff2')
  }

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    font-family: 'WLFont', sans-serif;
    background-image: ${({ theme }) =>
      `linear-gradient(to bottom, ${theme.colors.black} 0%, ${theme.colors.gray900} 100%)`};

    h1 {
      font-size: 38px;
      font-weight: 600;
    }

    h4 {
      font-size: 26px;
      font-weight: 600;
    }
  }

  :root {
    --text-size-primary: 14px;
  }

  /* reset.css */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* a tag reset*/
  a {
    color: initial;
    text-decoration: none;
    outline: none;
  }

  a:hover,
  a:active {
    text-decoration: none;
    color: initial;
    background-color: initial;
  }

  /* button tag reset*/
  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
  }

  input {
    outline: none;
  }
`;

export default GlobalStyle;
