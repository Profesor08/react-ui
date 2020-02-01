import React from "react";
import styled from "styled-components";
import { Card, CardHeader, CardBody } from "./Card";
import { Heading, Link, TextEllipsis } from "./Typography";
import { TaskStatus } from "./TaskStatus";

export const BidTitle = styled(TextEllipsis)`
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #2a2a2a;
`;

export const BidStatus = styled(TaskStatus)`
  justify-content: flex-end;
`;

export const BidAction = styled(Link)`
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: right;
`;

export const Bid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-content: center;
`;

export const BidsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  flex: 1;
`;

export const Bids = styled(({ ...props }) => (
  <Card {...props}>
    <CardHeader>
      <Heading size={3}>Clients(5)</Heading>
      <Link>View All</Link>
    </CardHeader>
    <CardBody>
      <BidsList>
        <Bid>
          <BidTitle>Ink Corp.</BidTitle>
          <BidStatus status="pending">Pending</BidStatus>
        </Bid>
        <Bid>
          <BidTitle>Jasper Tech</BidTitle>
          <BidStatus status="pending">Pending</BidStatus>
        </Bid>
        <Bid>
          <BidTitle>Ink Corp.</BidTitle>
          <BidAction>Move to Project</BidAction>
        </Bid>
        <Bid>
          <BidTitle>Jasper Tech</BidTitle>
          <BidAction>Move to Project</BidAction>
        </Bid>
      </BidsList>
    </CardBody>
  </Card>
))``;
