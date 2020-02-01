import styled, { css } from "styled-components";
import { darken } from "polished";

interface IButtonProps {
  size: "large" | "medium" | "small";
  color?: string;
  backgroundColor?: string;
}

export const Button = styled.button<IButtonProps>`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 1;
  border: 0;
  border-radius: 6px;
  outline: none;
  display: grid;
  align-content: center;
  color: ${p => (p.color ? p.color : "default")};
  background: ${p => (p.backgroundColor ? p.backgroundColor : "buttonface")};

  &:hover {
    cursor: pointer;
    background: ${p =>
      p.backgroundColor ? darken(0.1, p.backgroundColor) : "buttonface"};
  }

  &:active {
    background: ${p =>
      p.backgroundColor ? darken(0.2, p.backgroundColor) : "buttonface"};
  }

  ${p =>
    p.size === "large"
      ? css`
          height: 52px;
          font-weight: bold;
          font-size: 16px;
          padding: 16px 55px;
        `
      : null}

  ${p =>
    p.size === "medium"
      ? css`
          font-size: 14px;
          height: 40px;
          padding: 10px 30px;
        `
      : null}

  ${p =>
    p.size === "small"
      ? css`
          height: 30px;
          padding: 6px 23px;
        `
      : null}
`;
