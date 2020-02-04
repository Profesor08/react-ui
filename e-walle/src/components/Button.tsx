import styled from "styled-components";
import { lighten } from "polished";
import { Icon } from "./Icons";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: none;
  white-space: nowrap;
  font-weight: 600;
  padding: 0;
  color: ${p => p.theme.textPrimary};
  background-color: ${p => p.theme.iconSecondary};

  ${Icon} {
    fill: ${p => p.theme.textPrimary};
  }

  &:active {
    background-color: ${p => lighten(0.1, p.theme.iconSecondary)};
  }
`;

export const RegularButton = styled(Button)`
  height: 50px;
  border-radius: 10px;
  padding: 0 30px;

  ${Icon} {
    margin: 0 8px;
  }
`;

export const RoundButton = styled(Button)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
