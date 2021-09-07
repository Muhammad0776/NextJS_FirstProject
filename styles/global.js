import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
#nprogress{
  .spinner{
    top:0;
    right: 0;
    width: 100% !important;
    height: 100vh !important;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #33333333;
    .spinner-icon{
      width: 60px !important;
      height: 60px !important;
    }
  }
}

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    a,
    a:hover {
        text-decoration: none;
        color: black;
    }
`;

export default GlobalStyle;
