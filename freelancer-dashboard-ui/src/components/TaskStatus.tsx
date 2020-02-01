import styled, { css } from "styled-components";
import { TextEllipsis } from "./Typography";

type TProjectStatus = "pending" | "done" | "active";

interface IProjectStatusProps {
  status?: TProjectStatus;
}

const projectStatusColor = {
  active: "#0187e0",
  pending: "#ff9838",
  done: "#31ac4c",
};

export const TaskStatus = styled(TextEllipsis)<IProjectStatusProps>`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;

  ${p =>
    p.status
      ? css`
          &:before {
            content: "";
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: ${p.status ? projectStatusColor[p.status] : "#000000"};
            margin-right: 6px;
          }
        `
      : null}
`;
