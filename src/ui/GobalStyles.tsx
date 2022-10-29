import { createGlobalStyle } from "styled-components";
import { resetCSS, Color } from ".";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${resetCSS}
${theme}
body{
    font-family: 'Nunito Sans', sans-serif;
    background: ${Color.White};
    color: ${Color.Primary};
}
`;
