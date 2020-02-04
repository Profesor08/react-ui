import styled from "styled-components";

export const SectionHeader = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  height: 25px;
  color: ${p => p.theme.textAccent};
  margin: 0;
`;

export const SectionItem = styled.div`
  background-color: ${p => p.theme.backgroundSecondary};
  border-radius: 12px;
`;

export const Section = styled.div`
  ${SectionHeader}:not(:last-child) {
    margin: 0 0 20px 0;
  }
`;
