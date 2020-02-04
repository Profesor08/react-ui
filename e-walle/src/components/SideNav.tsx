import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { User, UserAvatar, UserName, UserAddress } from "./User";
import { IconButton, CloseIcon, QuitIcon, Icon } from "./Icons";
import { NavLink } from "react-router-dom";
import store from "../store/store";
import { observer } from "mobx-react";
import { theme } from "./theme/theme";

export const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${p => p.theme.backgroundSecondary};
`;

export const NavUser = styled.div`
  width: 210px;
  height: 107px;
  border-radius: 0px 0px 53.5px 0px;
  background-color: ${p => p.theme.backgroundPrimary};
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const NavCloseButton = styled(IconButton)`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const SideNavFooter = styled.div`
  margin: 27px 30px;
  font-weight: 500;
  font-size: 10px;
  color: ${p => p.theme.textSecondary};
`;

export const SideNavList = styled.div`
  flex: 1;
  display: grid;
  justify-content: start;
  align-items: start;
  align-content: center;
  grid-gap: 20px;
  padding: 0 0 0 30px;
`;

export const SideNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  line-height: 1;
  align-self: flex-start;
  color: ${p => p.theme.textPrimary};
  font-size: 16px;
  text-decoration: none;
  font-weight: 500;
  height: 33px;

  &.active {
    position: relative;
    font-weight: bold;
    color: ${p => p.theme.textPrimary};

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-30px, -50%);
      height: 33px;
      width: 4px;
      background-color: ${p => p.theme.iconSecondary};
    }
  }

  &:active {
    opacity: 0.7;
  }
`;

export const LogoutLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  line-height: 1;
  align-self: flex-start;
  font-weight: bold;
  font-size: 16px;
  color: ${p => p.theme.textPrimary};
  margin-left: 30px;
  margin-bottom: 30px;
  text-decoration: none;

  ${Icon} {
    margin-right: 8px;
    fill: ${p => p.theme.textPrimary};
  }

  &:active {
    opacity: 0.7;
  }
`;

const ThemeLink = styled.div`
  display: grid;
  grid-template-columns: 1fr 25px;
  grid-gap: 5px;
  align-items: center;
`;

const ThemeIndicator = styled.div`
  background-color: ${p => p.theme.backgroundPrimary};
  border: 2px solid ${p => p.theme.iconSecondary};
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

const close = () => {
  store.navActive = false;
};

export const SideNav = styled(
  observer(({ ...props }) => (
    <SideNavContainer {...props}>
      <NavUser>
        <User>
          <UserAvatar src="assets/images/avatars/avatar-1.png" />
          <UserName>John Doe</UserName>
          <UserAddress>Seattle,Washington</UserAddress>
        </User>
      </NavUser>
      <NavCloseButton
        onClick={() => {
          close();
        }}
      >
        <CloseIcon />
      </NavCloseButton>
      <SideNavList>
        <SideNavLink
          to="/main"
          onClick={() => {
            close();
          }}
        >
          Home
        </SideNavLink>
        <SideNavLink
          to="/wallet"
          onClick={() => {
            close();
          }}
        >
          Wallet
        </SideNavLink>
        <SideNavLink
          to="/accounts"
          onClick={() => {
            close();
          }}
        >
          Accounts
        </SideNavLink>
        <SideNavLink
          to="/transactions"
          onClick={() => {
            close();
          }}
        >
          Transactions
        </SideNavLink>
        <SideNavLink
          to="/stats"
          onClick={() => {
            close();
          }}
        >
          Stats
        </SideNavLink>
        <SideNavLink
          to="/settings"
          onClick={() => {
            close();
          }}
        >
          Settings
        </SideNavLink>
        <ThemeProvider
          theme={store.theme === "light" ? theme.dark : theme.light}
        >
          <ThemeLink
            onClick={() => {
              store.theme = store.theme === "light" ? "dark" : "light";
            }}
          >
            <span>Theme:</span>
            <ThemeIndicator />
          </ThemeLink>
        </ThemeProvider>
      </SideNavList>
      <LogoutLink to="/">
        <QuitIcon /> Logout
      </LogoutLink>
      <SideNavFooter>Version 2.0.1</SideNavFooter>
    </SideNavContainer>
  )),
)``;
