import React from "react";
import styled from "styled-components";
import { Section, SectionHeader, SectionItem } from "../components/Section";
import {
  SendMoneyIcon,
  ReceiveMoneyIcon,
  MobilePayIcon,
  ElectricityBillIcon,
  CashbackIcon,
  MovieIcon,
  PlaneIcon,
  OtherIcon,
} from "./Icons";

const ServicesBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const ServiceIcon = styled(SectionItem)`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ServiceName = styled.div`
  font-weight: 600;
  font-size: 10px;
  text-align: center;
  color: ${props => props.theme.textSecondary};
`;

const ServiceItem = styled.div`
  display: grid;
  grid-gap: 6px;
  align-self: center;
  justify-self: center;
  margin-bottom: 20px;
`;

export const Services = styled(({ ...props }) => (
  <Section {...props}>
    <SectionHeader>Services</SectionHeader>
    <ServicesBody>
      <ServiceItem>
        <ServiceIcon>
          <SendMoneyIcon />
        </ServiceIcon>
        <ServiceName>
          Send
          <br /> Money
        </ServiceName>
      </ServiceItem>
      <ServiceItem>
        <ServiceIcon>
          <ReceiveMoneyIcon />
        </ServiceIcon>
        <ServiceName>
          Receive
          <br /> Money
        </ServiceName>
      </ServiceItem>
      <ServiceItem>
        <ServiceIcon>
          <MobilePayIcon />
        </ServiceIcon>
        <ServiceName>
          Mobile
          <br /> Prepaid
        </ServiceName>
      </ServiceItem>
      <ServiceItem>
        <ServiceIcon>
          <ElectricityBillIcon />
        </ServiceIcon>
        <ServiceName>
          Electricity
          <br /> Bill
        </ServiceName>
      </ServiceItem>
      <ServiceItem>
        <ServiceIcon>
          <CashbackIcon />
        </ServiceIcon>
        <ServiceName>
          Cashback
          <br /> Offer
        </ServiceName>
      </ServiceItem>
      <ServiceItem>
        <ServiceIcon>
          <MovieIcon />
        </ServiceIcon>
        <ServiceName>
          Movie
          <br /> Tickets
        </ServiceName>
      </ServiceItem>
      <ServiceItem>
        <ServiceIcon>
          <PlaneIcon />
        </ServiceIcon>
        <ServiceName>
          Flight
          <br /> Tickets
        </ServiceName>
      </ServiceItem>
      <ServiceItem>
        <ServiceIcon>
          <OtherIcon />
        </ServiceIcon>
        <ServiceName>
          More
          <br /> Options
        </ServiceName>
      </ServiceItem>
    </ServicesBody>
  </Section>
))``;
