import React from "react";
import styled from "styled-components";
import { Card, CardHeader, CardBody } from "./Card";
import { Heading, Link } from "./Typography";
import { MessageIcon, IconButton } from "./Icons";
import { User, UserAvatar, UserName, UserEmail } from "./User";

export const Client = styled(User)`
  grid-template-columns: 52px 1fr 19px;

  ${IconButton} {
    grid-row: 1 / span 2;
    align-self: center;
  }
`;

export const ClientsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`;

export const Clients = styled(({ ...props }) => {
  return (
    <Card {...props}>
      <CardHeader>
        <Heading size={3}>Clients(5)</Heading>
        <Link>View All</Link>
      </CardHeader>
      <CardBody>
        <ClientsList>
          <Client>
            <UserAvatar src="assets/images/avatars/avatar-1.png" />
            <UserName>Alex</UserName>
            <UserEmail>alex@hotmail.com</UserEmail>
            <IconButton>
              <MessageIcon />
            </IconButton>
          </Client>
          <Client>
            <UserAvatar src="assets/images/avatars/avatar-2.png" />
            <UserName>Jessica</UserName>
            <UserEmail>jessica@gmail.com</UserEmail>
            <IconButton>
              <MessageIcon />
            </IconButton>
          </Client>
          <Client>
            <UserAvatar src="assets/images/avatars/avatar-3.png" />
            <UserName>Willam</UserName>
            <UserEmail>willam@yahoo.com</UserEmail>
            <IconButton>
              <MessageIcon />
            </IconButton>
          </Client>
        </ClientsList>
      </CardBody>
    </Card>
  );
})``;
