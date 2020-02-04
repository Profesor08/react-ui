import React from "react";
import { observer } from "mobx-react";
import store from "../store/store";
import styled, {
  createGlobalStyle,
  ThemeProvider,
  ThemeProps,
  css,
} from "styled-components";
import { theme } from "./theme/theme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MainPage } from "../pages/main";
import { WalletPage } from "../pages/wallet";
import { SideNav } from "./SideNav";
import { Header } from "./Header";

const GlobalStyle = createGlobalStyle<ThemeProps<ITheme>>`
  body {
    margin: 0;
    font-family: "Muli", sans-serif;
    color: ${props => props.theme.textPrimary};
    background-color: ${props => props.theme.backgroundSecondary};
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  body * {
    box-sizing: border-box;
  }

  img, svg {
    vertical-align: middle;
  }
`;

const PageBody = styled.div`
  padding: 20px 25px 37px 25px;
  background-color: ${props => props.theme.backgroundPrimary};
  overflow-y: auto;
`;

interface IAppContainerProps {
  navActive?: boolean;
}

const PageContainer = styled.div<IAppContainerProps>`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: ease transform 0.5s, ease border-radius 0.2s;
  transform: translateZ(0);

  ${PageBody} {
    flex: 1;
  }

  ${p =>
    p.navActive
      ? css`
          transform: rotate(-15deg) scale(0.67) translate(65%, 10%)
            translateZ(0);
          border-radius: 30px;
        `
      : null}
`;

interface IPageProps {
  navActive?: boolean;
  children?: React.ReactNode | React.ReactNodeArray;
}

const Page = styled(({ children, ...props }: IPageProps) => (
  <PageContainer {...props}>
    <Header />
    <PageBody>{children}</PageBody>
  </PageContainer>
))``;

export const App = observer(() => {
  return (
    <ThemeProvider theme={theme[store.theme]}>
      <GlobalStyle />
      <Router>
        <SideNav />
        <Switch>
          <Route path="/wallet">
            <Page navActive={store.navActive}>
              <WalletPage />
            </Page>
          </Route>
          <Route path="/accounts">
            <Page navActive={store.navActive}>Accounts</Page>
          </Route>
          <Route path="/transactions">
            <Page navActive={store.navActive}>Transactions</Page>
          </Route>
          <Route path="/stats">
            <Page navActive={store.navActive}>Stats</Page>
          </Route>
          <Route path="/settings">
            <Page navActive={store.navActive}>Settings</Page>
          </Route>
          <Route path="/help">
            <Page navActive={store.navActive}>Help</Page>
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
});
