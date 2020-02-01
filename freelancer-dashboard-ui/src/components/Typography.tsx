import styled, { css } from "styled-components";

type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;

interface IHeadingProps {
  size: HeadingSize;
}

const getHeadingSize = (size: HeadingSize) => {
  switch (size) {
    case 1:
      return css``;
    case 2:
      return css``;
    case 3:
      return css`
        font-size: 18px;
        line-height: 23px;
      `;
    case 4:
      return css`
        font-size: 16px;
        line-height: 20px;
      `;
    case 5:
      return css``;
    case 6:
      return css``;
  }
};

export const Heading = styled.div<IHeadingProps>`
  color: #2a2a2a;
  font-weight: bold;

  ${p => getHeadingSize(p.size)}
`;

export const Link = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #0187e0;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Text = styled.div``;

export const TextEllipsis = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  white-space: nowrap;
  max-width: 100%;
`;
