import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  background: #eceef3;
  margin: 145px auto;
  max-width: 1440px;
  box-shadow: 0px 100px 140px rgba(0, 0, 0, 0.46);
  overflow-y: auto;

  @media (max-width: 1439px) {
    margin: 30px 15px;
  }
`;

export const AppContent = styled.div`
  display: grid;
  grid-gap: 30px;
  margin: 40px 70px 35px 70px;

  @media (max-width: 1439px) {
    margin: 40px 30px 35px 30px;
  }

  @media (max-width: 768px) {
    margin: 40px 15px 35px 15px;
  }
`;
