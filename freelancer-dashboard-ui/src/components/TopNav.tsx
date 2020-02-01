import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  DashboardIcon,
  ProjectsIcon,
  ClientsIcon,
  TaskIcon,
  BidsIcon,
  Icon,
  HamburderIcon,
  IconButton,
  CloseIcon,
} from "./Icons";
import { Text } from "./Typography";
import { darken } from "polished";

interface ITopNavItemProps {
  active?: boolean;
}

export const TopNavItem = styled.a<ITopNavItemProps>`
  position: relative;
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-gap: 10px;
  align-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  color: ${p => (p.active ? "#2a2a2a" : "#b6ccdf")};
  font-weight: ${p => (p.active ? "bold" : 600)};
  height: 100%;

  ${Icon} {
    fill: ${p => (p.active ? "#0187e0" : "#b6ccdf")};
  }

  &:hover {
    color: ${p => (p.active ? "#2a2a2a" : darken(0.1, "#b6ccdf"))};

    ${Icon} {
      fill: ${p => (p.active ? "#0187e0" : darken(0.1, "#b6ccdf"))};
    }
  }

  &:after {
    content: "";
    display: ${p => (p.active ? "block" : "none")};
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5px;
    background: #0187e0;
  }
`;

interface ITopNavListProps {
  active?: boolean;
}

export const TopNavList = styled.div<ITopNavListProps>`
  display: flex;
  height: 100%;

  ${TopNavItem} {
    @media (min-width: 1440px) {
      &:not(:last-child) {
        margin-right: 60px;
      }
    }

    @media (min-width: 1100px) {
      &:not(:last-child) {
        margin-right: 30px;
      }
    }

    @media (max-width: 1099px) {
      height: auto;
      padding-bottom: 10px;
      grid-template-columns: 30px 1fr;
      grid-gap: 15px;
      font-size: 20px;

      ${Icon} {
        height: 30px;
        width: 30px;
      }
    }
  }

  @media (max-width: 1099px) {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    display: grid;
    grid-gap: 30px;
    align-content: center;
    justify-content: center;
    transition: ease transform 0.5s, ease opacity 0.5s, ease left 0s;
    transition-delay: 0s, 0s, 0s;

    ${p =>
      p.active
        ? css`
            transform: scale(1);
            opacity: 1;
          `
        : css`
            left: -99999px;
            transform: scale(0.8);
            opacity: 0;
            transition-delay: 0s, 0s, 0.5s;
          `}
  }
`;

export const NavMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const MenuToggleButton = styled(IconButton)`
  ${Icon} {
    width: 35px;
    height: 35px;
  }

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const MenuCloseButton = styled(MenuToggleButton)`
  position: absolute;
  top: 30px;
  left: 30px;
`;

export const TopNav = styled(({ ...props }) => {
  const [active, setActive] = useState(false);

  return (
    <NavMenu {...props}>
      <MenuToggleButton
        onClick={() => {
          setActive(true);
        }}
      >
        <HamburderIcon />
      </MenuToggleButton>
      <TopNavList active={active}>
        <MenuCloseButton
          onClick={() => {
            setActive(false);
          }}
        >
          <CloseIcon />
        </MenuCloseButton>
        <TopNavItem active={true} href="./">
          <DashboardIcon />
          <Text>Dashboard</Text>
        </TopNavItem>
        <TopNavItem href="./">
          <ProjectsIcon />
          <Text>Projects</Text>
        </TopNavItem>
        <TopNavItem href="./">
          <ClientsIcon />
          <Text>Clients</Text>
        </TopNavItem>
        <TopNavItem href="./">
          <TaskIcon />
          <Text>Task</Text>
        </TopNavItem>
        <TopNavItem href="./">
          <BidsIcon />
          <Text>Bids</Text>
        </TopNavItem>
      </TopNavList>
    </NavMenu>
  );
})``;
