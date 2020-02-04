import React from "react";
import styled from "styled-components";
import { Section, SectionHeader, SectionItem } from "../components/Section";
import { RoundButton } from "./Button";
import { PlusIcon, IconButton, ServicesIcon } from "./Icons";
import { UserAvatar } from "./User";
import { darken } from "polished";

export const UserName = styled.div`
  font-size: 12px;
  color: ${props => props.theme.textSecondary};
`;

export const UserItem = styled(SectionItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 120px;
  flex: 0 0 100px;

  ${UserName} {
    margin-top: 15px;
  }

  ${UserAvatar} {
    border: 2px solid ${p => darken(0.15, p.theme.backgroundSecondary)};
  }
`;

export const SendMoneyBody = styled.div`
  width: calc(100vw - 50px);
  overflow-x: visible;

  ${RoundButton} {
    flex: 0 0 48px;
    margin: 0 20px 0 25px;
  }

  ${UserItem} {
    &:not(:last-child) {
      margin-right: 10px;
    }

    &:last-child {
      margin-right: 25px;
    }
  }
`;

const ScrollContainer = styled.div`
  width: 100vw;
  margin-left: -25px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
`;

export const SendMoney = styled(({ ...props }) => (
  <Section {...props}>
    <SectionHeader>
      Send Money
      <IconButton>
        <ServicesIcon />
      </IconButton>
    </SectionHeader>
    <SendMoneyBody>
      <ScrollContainer>
        <FlexWrapper>
          <RoundButton>
            <PlusIcon />
          </RoundButton>
          <UserItem>
            <UserAvatar src="assets/images/avatars/avatar-2.png" />
            <UserName>Mike</UserName>
          </UserItem>
          <UserItem>
            <UserAvatar src="assets/images/avatars/avatar-3.png" />
            <UserName>Joshpeh</UserName>
          </UserItem>
          <UserItem>
            <UserAvatar src="assets/images/avatars/avatar-4.png" />
            <UserName>Ashley</UserName>
          </UserItem>
          <UserItem>
            <UserAvatar src="assets/images/avatars/avatar-1.png" />
            <UserName>John</UserName>
          </UserItem>
        </FlexWrapper>
      </ScrollContainer>
    </SendMoneyBody>
  </Section>
))``;
