import styled from "styled-components";
import { Container } from "./Container";

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

export const CardBody = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  ${CardHeader} {
    margin-bottom: 20px;
  }

  ${CardBody} {
    flex: 1;
  }
`;
