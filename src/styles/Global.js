import { createGlobalStyle } from "styled-components"

const Global= createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap');

  :root{
    --blue: #11B0C8;
    --gray-light: #f9f9f9;
    --black: #000;
    --gray-dark: #7d7d7d;
    --white: #fff;

  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: var(--gray-dark);
    background-color: var(--gray-light);
  }

  * {
    box-sizing: border-box
  }

  img {
    max-width: 100%;
  }

  .container {
    max-width: 1260px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 30px;
    padding-right: 30px;
  }

`

export default Global;