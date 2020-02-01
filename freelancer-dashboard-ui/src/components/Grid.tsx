import styled from "styled-components";

interface IGridProps {
  columns: number;
  rows: number;
}

export const Grid = styled.div<IGridProps>`
  display: grid;
  grid-template-columns: repeat(${p => p.columns}, 1fr);
  grid-template-rows: repeat(${p => p.rows}, 1fr);
  grid-gap: 30px;
`;
