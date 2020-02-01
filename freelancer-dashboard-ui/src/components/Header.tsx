import styled from "styled-components";
import { TopNav } from "./TopNav";
import { Profile } from "./Profile";

export const Header = styled.div`
  height: 100px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 0 70px;
  display: flex;

  ${TopNav} {
    margin-right: auto;
  }

  ${Profile} {
    margin-left: 60px;
  }

  @media (max-width: 1439px) {
    height: 80px;
    padding: 0 30px;
  }

  @media (max-width: 1100px) {
    height: 60px;
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;
