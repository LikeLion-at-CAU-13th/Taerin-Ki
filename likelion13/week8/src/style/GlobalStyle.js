import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DungGeunMo';
    src: url('/DungGeunMo.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}

body {
  font-family: 'DungGeunMo', sans-serif;
}
`;