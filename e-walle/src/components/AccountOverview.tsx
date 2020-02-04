import React from "react";
import styled from "styled-components";
import { Section, SectionHeader, SectionItem } from "../components/Section";
import { RoundButton } from "./Button";
import { PlusIcon } from "./Icons";

export const AccountWallet = styled(SectionItem)`
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr 48px;
  grid-gap: 15px;
  align-items: center;
`;

export const AccountBallanceValue = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: ${p => p.theme.textPrimary};
`;

export const AccountBallanceLabel = styled.div`
  font-weight: normal;
  font-size: 12px;
  color: ${p => p.theme.textSecondary};
`;

export const AccountBallance = styled.div``;

export const AccountOverview = styled(({ ...props }) => (
  <Section {...props}>
    <SectionHeader>Account Overview</SectionHeader>
    <AccountWallet>
      <AccountBallance>
        <AccountBallanceValue>20,600</AccountBallanceValue>
        <AccountBallanceLabel>Current balance</AccountBallanceLabel>
      </AccountBallance>
      <RoundButton>
        <PlusIcon />
      </RoundButton>
    </AccountWallet>
  </Section>
))``;
