import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { AppContainer, AppContent } from "./AppContainer";
import { Header } from "./Header";
import { Search } from "./Search";
import { Projects } from "./Projects";
import { Grid } from "./Grid";
import { Clients } from "./Clients";
import { Bids } from "./Bids";
import { Invoice } from "./Invoice";
import { CreateTask } from "./CreateTask";
import { TopNav } from "./TopNav";
import { Profile } from "./Profile";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Muli", sans-serif;
    color: #2A2A2A;
    background-color: #0970d5;
    background-image: url(assets/images/background.svg);
    background-position: center top;
    background-size: cover;
  }

  body * {
    box-sizing: border-box;
  }

  img, svg {
    vertical-align: middle;
  }
`;

const AppComponent = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: auto;
`;

const ContentGrid = styled(Grid)`
  @media (max-width: 1199px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const AdditionalGrid = styled(Grid)`
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const App = () => {
  return (
    <AppComponent>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <TopNav />
          <Profile />
        </Header>
        <AppContent>
          <Search />
          <ContentGrid columns={2} rows={1}>
            <Projects />
            <AdditionalGrid columns={2} rows={2}>
              <Clients />
              <CreateTask />
              <Bids />
              <Invoice />
            </AdditionalGrid>
          </ContentGrid>
        </AppContent>
      </AppContainer>
    </AppComponent>
  );
};
