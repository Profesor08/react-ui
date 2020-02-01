import React from "react";
import styled from "styled-components";
import { Card, CardHeader, CardBody } from "./Card";
import { Heading } from "./Typography";
import { Button } from "./Button";

export const CreateTaskBody = styled(CardBody)`
  margin-bottom: 14px;
  position: relative;
  background: transparent;
  padding: 15px 15px 20px 15px;

  &:before {
    content: "";
    position: absolute;
    top: 10px;
    left: 15px;
    z-index: 0;
    width: calc(100% - 30px);
    height: 100%;
    background: #dde4f4;
    border-radius: 10px;
  }

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0187e0;
    box-shadow: 0px 14px 10px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
  }

  * {
    z-index: 4;
  }
`;

export const CreateTaskTitle = styled(Heading)`
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  line-height: 16px;
  color: #ffffff;
`;

export const CreateTaskImage = styled.img`
  position: relative;
  max-width: 100%;
  margin-top: 10px;
  z-index: 2;
  margin-bottom: -30px;
`;

export const CreateTaskButton = styled(Button)`
  align-self: center;
  margin-top: auto;
`;

export const CreateTask = styled(({ ...props }) => (
  <Card {...props}>
    <CardHeader>
      <Heading size={3}>Task</Heading>
    </CardHeader>
    <CreateTaskBody>
      <CreateTaskTitle size={4}>You don’t have any task</CreateTaskTitle>
      <CreateTaskImage src="assets/images/work-table.svg" />
      <CreateTaskButton size="small" backgroundColor="#FFFFFF" color="#2A2A2A">
        Create New Task
      </CreateTaskButton>
    </CreateTaskBody>
  </Card>
))``;
