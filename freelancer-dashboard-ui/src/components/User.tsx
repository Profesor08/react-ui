import styled from "styled-components";
import { TextEllipsis } from "./Typography";

export const UserAvatar = styled.img`
  width: 52px;
  height: 52px;
  background-blend-mode: normal;
  border-radius: 10px;

  @media (max-width: 1099px) {
    width: 40px;
    height: 40px;
    border-radius: 6px;
  }
`;

export const UserName = styled(TextEllipsis)`
  font-weight: bold;
  font-size: 16px;
  color: #2a2a2a;

  @media (max-width: 1099px) {
    font-size: 14px;
  }
`;

export const UserEmail = styled(TextEllipsis)`
  font-size: 14px;
  color: rgba(42, 42, 42, 0.7);

  @media (max-width: 1099px) {
    font-size: 12px;
  }
`;

export const User = styled.div`
  display: grid;
  grid-template-columns: 52px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 5px 10px;

  ${UserAvatar} {
    grid-row: 1 / span 2;
    align-self: center;
  }

  ${UserName} {
    grid-row-start: 1;
    align-self: end;
  }

  ${UserEmail} {
    grid-row-start: 2;
    align-self: start;
  }

  @media (max-width: 1099px) {
    grid-template-columns: 40px 1fr;
  }
`;
