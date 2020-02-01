import React from "react";
import styled from "styled-components";
import { Card, CardHeader, CardBody } from "./Card";
import { Heading, TextEllipsis } from "./Typography";
import { ChevronIcon, IconButton, Icon } from "./Icons";
import { Button } from "./Button";

export const InvoiceSwitchComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 26px;
`;

interface IInvoiceSwitchIconProps {
  available?: boolean;
}

export const InvoiceSwitchIcon = styled(IconButton)<IInvoiceSwitchIconProps>`
  ${Icon} {
    fill: ${p => (p.available ? "#2a2a2a" : "#CCD8E2")};
  }

  &:hover {
    ${Icon} {
      fill: ${p => (p.available ? "#0187e0" : "#CCD8E2")};
    }
  }
`;

export const InvoiceSwitchIconLeft = styled(InvoiceSwitchIcon)``;

export const InvoiceSwitchIconRight = styled(InvoiceSwitchIcon)`
  ${Icon} {
    transform: scale(-1, 1);
  }
`;

export const InvoiceSwitch = () => {
  return (
    <InvoiceSwitchComponent>
      <InvoiceSwitchIconLeft>
        <ChevronIcon />
      </InvoiceSwitchIconLeft>
      <InvoiceSwitchIconRight available={true}>
        <ChevronIcon />
      </InvoiceSwitchIconRight>
    </InvoiceSwitchComponent>
  );
};

export const InvoiceTitle = styled(Heading)`
  font-weight: 800;
`;

export const InvoiceText = styled(TextEllipsis)`
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
`;

export const InvoiceRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-content: center;
`;

export const InvoiceRowsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
  margin: 25px 0 22px 0;
`;

export const InvoiceButton = styled(Button)`
  margin-top: auto;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 10px);
    width: 80%;
    height: 40px;
    background: rgba(237, 73, 73, 0.3);
    filter: blur(7px);
    border-radius: 6px;
  }
`;

export const Invoice = styled(({ ...props }) => (
  <Card {...props}>
    <CardHeader>
      <Heading size={3}>Invoice(2)</Heading>
      <InvoiceSwitch />
    </CardHeader>
    <CardBody>
      <InvoiceTitle size={4}>Flip Corp.</InvoiceTitle>
      <InvoiceRowsList>
        <InvoiceRow>
          <InvoiceText>Client</InvoiceText>
          <InvoiceText>Edward Black</InvoiceText>
        </InvoiceRow>
        <InvoiceRow>
          <InvoiceText>Task</InvoiceText>
          <InvoiceText>Design</InvoiceText>
        </InvoiceRow>
        <InvoiceRow>
          <InvoiceText>Working Time</InvoiceText>
          <InvoiceText>2 days 3 hr</InvoiceText>
        </InvoiceRow>
      </InvoiceRowsList>
      <InvoiceButton size="medium" color="#ffffff" backgroundColor="#ed4949">
        Create Invoice
      </InvoiceButton>
    </CardBody>
  </Card>
))``;
