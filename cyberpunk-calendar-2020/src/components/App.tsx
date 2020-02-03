import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Calendar } from "./Calendar";

const images = [
  "assets/images/january.jpg",
  "assets/images/february.jpg",
  "assets/images/march.jpg",
  "assets/images/april.jpg",
  "assets/images/may.jpg",
  "assets/images/june.jpg",
  "assets/images/july.jpg",
  "assets/images/august.jpg",
  "assets/images/september.jpg",
  "assets/images/october.jpg",
  "assets/images/november.jpg",
  "assets/images/december.jpg",
];

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width: 100%;
    height: 100vh;
    background: #3A4276;
  }
`;

const AppContainer = styled.div``;

export const App = styled(({ ...props }) => (
  <AppContainer {...props}>
    <GlobalStyle />
    <Calendar images={images} />
  </AppContainer>
))``;

export default App;
