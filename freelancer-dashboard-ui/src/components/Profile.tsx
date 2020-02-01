import React from "react";
import styled from "styled-components";
import { User, UserAvatar, UserName, UserEmail } from "./User";
import { ChevronIcon, NotificationIcon, EmailIcon, Icon } from "./Icons";
import { darken } from "polished";

interface IProfileButtonProps {
  hasNotice?: boolean;
}

export const ProfileButton = styled.div<IProfileButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border: 1px solid #d3dde6;
  box-sizing: border-box;
  border-radius: 10px;

  ${Icon} {
    fill: #d3dde6;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid ${darken(0.1, "#d3dde6")};

    ${Icon} {
      fill: ${darken(0.1, "#d3dde6")};
    }
  }

  &:active {
    border: 1px solid ${darken(0.2, "#d3dde6")};

    ${Icon} {
      fill: ${darken(0.2, "#d3dde6")};
    }
  }

  &:after {
    content: "";
    display: ${p => (p.hasNotice ? "block" : "none")};
    position: absolute;
    right: 10px;
    top: 10px;
    width: 4px;
    height: 4px;
    background: #ff1111;
    border-radius: 50%;
  }

  @media (max-width: 1099px) {
    width: 40px;
    height: 40px;
    border-radius: 6px;

    &:after {
      right: 5px;
      top: 5px;
    }
  }
`;

export const ProfileArrowDown = styled(ChevronIcon)`
  transform: translate(0, 2px) rotate(-90deg);
  margin-left: 6px;
  fill: #0187e0;
`;

export const ProfileName = styled(UserName)`
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: #0187e0;

  &:hover {
    ${ProfileArrowDown} {
      fill: #0187e0;
    }
  }
`;

export const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 52px 52px 1fr;
  grid-gap: 20px;
  align-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 1099px) {
    grid-template-columns: 40px 40px 1fr;

    ${ProfileName}, ${UserEmail} {
      display: none;
    }

    ${User} {
      grid-gap: 0;
    }
  }
`;

export const Profile = styled(({ ...props }) => (
  <ProfileWrapper {...props}>
    <ProfileButton hasNotice={true}>
      <NotificationIcon />
    </ProfileButton>
    <ProfileButton>
      <EmailIcon />
    </ProfileButton>
    <User>
      <UserAvatar src="assets/images/avatars/avatar-4.png" />
      <ProfileName>
        Alen Smith <ProfileArrowDown />
      </ProfileName>
      <UserEmail>alex@hotmail.com</UserEmail>
    </User>
  </ProfileWrapper>
))``;
