import { createGlobalStyle } from "styled-components"
import RegFont from "./Helvetica_Neue/reg.otf"
import BoldFont from "./Helvetica_Neue/bold.otf"
import { colors } from "../../constants/styles"

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "Helvetica Neue Bd";
    src: url(${RegFont});
    }
    @font-face {
    font-family: "Helvetica Neue BdIt";
    src: url(${BoldFont});
    }
    * {
    font-family: "Helvetica Neue Bd";
    font-weight: normal;
    }
    ::-webkit-scrollbar {
    display: none;
    }
    html,
    body {
    margin: 0;
    }
    ::selection {
    background: white; /* WebKit/Blink Browsers */
    color: ${colors.Yellow};
    }
    a {
    text-decoration: none;
    color: inherit;
    }
    p {
    font-size: 20px;
    text-transform: lowercase;
    }

`
