import React from "react";
import styled from "styled-components";
import { AccountOverview } from "../components/AccountOverview";
import { SendMoney } from "../components/SendMoney";
import { Services } from "../components/Services";

export const WalletPageElement = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
`;

export const WalletPage = styled(({ ...props }) => {
  return (
    <WalletPageElement>
      <AccountOverview />
      <SendMoney />
      <Services />
    </WalletPageElement>
  );
})``;
