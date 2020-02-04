import React from "react";
import styled from "styled-components";
import { LogoIcon, MenuIcon, IconButton } from "./Icons";
import store from "../store/store";

export const HeaderElement = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 25px;
  background-color: ${props => props.theme.backgroundPrimary};

  ${LogoIcon} {
    margin-right: 10px;
  }

  ${IconButton} {
    margin-left: auto;
  }
`;

export const HeaderText = styled.div`
  font-weight: 500;
  font-size: 28px;
  line-height: 1;
  color: ${props => props.theme.textPrimary};
`;

export const Header = styled(({ ...props }) => {
  return (
    <HeaderElement {...props}>
      <LogoIcon />
      <HeaderText>eWalle</HeaderText>
      <IconButton
        onClick={() => {
          store.navActive = true;
        }}
      >
        <MenuIcon />
      </IconButton>
    </HeaderElement>
  );
})``;
