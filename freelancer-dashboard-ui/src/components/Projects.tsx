import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Card, CardHeader, CardBody } from "./Card";
import { Heading, Link, TextEllipsis } from "./Typography";
import {
  ArrowIcon,
  ViewIcon,
  RemoveIcon,
  PauseIcon,
  IconButton,
} from "./Icons";
import { TaskStatus } from "./TaskStatus";

export const ProjectText = styled(TextEllipsis)`
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
`;

export const ProjectName = styled(ProjectText)`
  font-weight: bold;
`;

export const ProjectTask = styled(ProjectText)``;

export const ProjectStatus = styled(ProjectText)`
  display: flex;
  align-items: center;
`;

export const ProjectAction = styled(ProjectText)`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${IconButton} {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
`;

export const ProjectsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 80px;
  grid-gap: 6px;
  padding: 0 40px 0 16px;
  margin: 20px 0;

  ${ProjectText} {
    font-weight: bold;
  }

  ${ProjectAction} {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProjectsList = styled.div`
  display: grid;
  grid-gap: 6px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Project = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 80px;
  grid-gap: 6px;
  align-content: center;
  height: 49px;
  border: 1px solid #d8e1e9;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 40px 0 16px;

  @media (max-width: 768px) {
    padding: 5px 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    ${ProjectName} {
      grid-column: 1;
      grid-row: 1;
    }

    ${ProjectTask} {
      grid-column: 1;
      grid-row: 2;
    }

    ${TaskStatus} {
      grid-column: 2;
      grid-row: 1;
      justify-self: end;
    }

    ${ProjectAction} {
      grid-column: 2;
      grid-row: 2;
      justify-self: end;
    }
  }
`;

export const ProjectsInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

interface IProjectsInfoItemProps {
  type: "all" | "completed" | "pending";
}

const projectInfoItemColor = {
  all: "#0187e0",
  completed: "#31ac4c",
  pending: "#ff9838",
};

export const ProjectsInfoItemWrapper = styled.div`
  overflow: hidden;
  margin-bottom: -48px;
`;

export const ProjectsInfoItem = styled.div<IProjectsInfoItemProps>`
  height: 100px;
  border-radius: 10px;
  padding: 12px;
  color: #ffffff;
  background: ${p => projectInfoItemColor[p.type]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  margin-bottom: 58px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 0;
    display: block;
    height: 100%;
    width: 50%;
    transform: translate(-50%, 10px);
    background: ${p => rgba(projectInfoItemColor[p.type], 0.4)};
    border-radius: 10px;
    filter: blur(24px);

    @media (max-width: 768px) {
      display: none;
    }
  }

  * {
    position: relative;
    z-index: 1;
  }

  ${Heading} {
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: row;
    align-items: center;
  }
`;

export const ProjectsInfoItemCount = styled.div`
  font-weight: bold;
  font-size: 36px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Projects = styled(({ ...props }) => {
  return (
    <Card {...props}>
      <CardHeader>
        <Heading size={3}>Projects</Heading>
        <Link>Manage Projects</Link>
      </CardHeader>
      <CardBody>
        <ProjectsInfo>
          <ProjectsInfoItemWrapper>
            <ProjectsInfoItem type="all">
              <Heading size={4}>All Projects</Heading>
              <ProjectsInfoItemCount>06</ProjectsInfoItemCount>
            </ProjectsInfoItem>
          </ProjectsInfoItemWrapper>
          <ProjectsInfoItemWrapper>
            <ProjectsInfoItem type="completed">
              <Heading size={4}>Completed</Heading>
              <ProjectsInfoItemCount>02</ProjectsInfoItemCount>
            </ProjectsInfoItem>
          </ProjectsInfoItemWrapper>
          <ProjectsInfoItemWrapper>
            <ProjectsInfoItem type="pending">
              <Heading size={4}>Pending</Heading>
              <ProjectsInfoItemCount>04</ProjectsInfoItemCount>
            </ProjectsInfoItem>
          </ProjectsInfoItemWrapper>
        </ProjectsInfo>
        <ProjectsHeader>
          <ProjectName>Project Name</ProjectName>
          <ProjectTask>Task</ProjectTask>
          <ProjectStatus>Status</ProjectStatus>
          <ProjectAction>Action</ProjectAction>
        </ProjectsHeader>
        <ProjectsList>
          <Project>
            <ProjectName>Roseret</ProjectName>
            <ProjectTask>Wireframing</ProjectTask>
            <TaskStatus status="pending">Pending</TaskStatus>
            <ProjectAction>
              <IconButton>
                <ArrowIcon />
              </IconButton>
              <IconButton>
                <ViewIcon />
              </IconButton>
              <IconButton>
                <RemoveIcon />
              </IconButton>
            </ProjectAction>
          </Project>
          <Project>
            <ProjectName>CMS</ProjectName>
            <ProjectTask>Design</ProjectTask>
            <TaskStatus status="pending">Pending</TaskStatus>
            <ProjectAction>
              <IconButton>
                <ArrowIcon />
              </IconButton>
              <IconButton>
                <ViewIcon />
              </IconButton>
              <IconButton>
                <RemoveIcon />
              </IconButton>
            </ProjectAction>
          </Project>
          <Project>
            <ProjectName>Pingset</ProjectName>
            <ProjectTask>Development</ProjectTask>
            <TaskStatus status="active">In Progress</TaskStatus>
            <ProjectAction>
              <IconButton active={true}>
                <PauseIcon />
              </IconButton>
              <IconButton>
                <ViewIcon />
              </IconButton>
              <IconButton>
                <RemoveIcon />
              </IconButton>
            </ProjectAction>
          </Project>
          <Project>
            <ProjectName>Pingset</ProjectName>
            <ProjectTask>Testing</ProjectTask>
            <TaskStatus status="pending">Pending</TaskStatus>
            <ProjectAction>
              <IconButton>
                <ArrowIcon />
              </IconButton>
              <IconButton>
                <ViewIcon />
              </IconButton>
              <IconButton>
                <RemoveIcon />
              </IconButton>
            </ProjectAction>
          </Project>
          <Project>
            <ProjectName>Flip Corp.</ProjectName>
            <ProjectTask>Design</ProjectTask>
            <TaskStatus status="done">Done</TaskStatus>
            <ProjectAction>
              <IconButton>
                <ViewIcon />
              </IconButton>
              <IconButton>
                <RemoveIcon />
              </IconButton>
            </ProjectAction>
          </Project>
          <Project>
            <ProjectName>CSR Bank</ProjectName>
            <ProjectTask>Wireframing</ProjectTask>
            <TaskStatus status="done">Done</TaskStatus>
            <ProjectAction>
              <IconButton>
                <ViewIcon />
              </IconButton>
              <IconButton>
                <RemoveIcon />
              </IconButton>
            </ProjectAction>
          </Project>
        </ProjectsList>
      </CardBody>
    </Card>
  );
})``;
