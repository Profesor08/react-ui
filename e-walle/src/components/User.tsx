import React from "react";
import styled from "styled-components";

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${p => p.theme.backgroundSecondary};
  border-radius: 50%;
  overflow: hidden;
`;

interface IUserAvatarProps {
  src: string;
}

export const UserAvatar = styled(({ src, ...props }: IUserAvatarProps) => (
  <Avatar {...props}>
    <AvatarImage src={src} />
  </Avatar>
))``;

export const UserName = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: ${p => p.theme.textPrimary};
`;

export const UserAddress = styled.div`
  font-weight: 500;
  font-size: 10px;
  color: ${p => p.theme.textSecondary};
`;

export const User = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0 10px;
  align-items: center;
  align-content: center;
  justify-content: center;

  ${UserAvatar} {
    grid-row: 1 / span 2;
    align-self: center;
  }

  ${UserName} {
    grid-row-start: 1;
    align-self: end;
  }

  ${UserAddress} {
    grid-row-start: 2;
    align-self: start;
  }
`;
