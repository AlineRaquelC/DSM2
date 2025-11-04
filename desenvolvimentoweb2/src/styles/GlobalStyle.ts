import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f7f9fb;
    color: #333;
    font-family: "Poppins", Arial, sans-serif;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: #0b8a44;
    font-weight: 500;
  }

  button {
    cursor: pointer;
    background-color: #0b8a44;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 1rem;
    transition: background 0.3s ease;

    &:hover {
      background-color: #0a7038;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;
