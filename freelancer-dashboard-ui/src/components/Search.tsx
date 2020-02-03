import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { SearchIcon, LocationIcon } from "./Icons";
import { TextEllipsis } from "./Typography";
import { darken } from "polished";

const SearchInput = styled.input`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #0187e0;
  width: 100%;
  height: 40px;
  border: 0;
  outline: 0;

  &::placeholder {
    color: #b6ccdf;
  }
`;

export const SearchBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const LocationBlock = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;

    ${Button} {
      margin-top: 30px;
      width: 100%;
      padding: 10px 55px;
      height: auto;
    }
  }
`;

export const SearchComponent = styled.div`
  height: 72px;
  background: #ffffff;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  grid-gap: 25px;
  align-items: center;

  ${SearchIcon} {
    margin-left: 15px;
    margin-right: 10px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
    height: auto;
    padding: 30px 27px;
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

export const SearchBlockDelimiter = styled.div`
  height: 40px;
  width: 2px;
  background: #d8e1e9;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LocationButtonComponent = styled.div`
  display: grid;
  grid-template-columns: 18px 1fr;
  grid-gap: 10px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #b6ccdf;
  margin-right: auto;

  &:hover {
    cursor: pointer;
    color: ${darken(0.1, "#b6ccdf")};

    ${LocationIcon} {
      fill: ${darken(0.1, "#b6ccdf")};
    }
  }

  @media (max-width: 900px) {
    margin-left: 15px;
  }
`;

export const LocationButton = styled(({ ...props }) => (
  <LocationButtonComponent {...props}>
    <LocationIcon />
    <TextEllipsis>Choose Location</TextEllipsis>
  </LocationButtonComponent>
))``;

export const Search = styled(({ ...props }) => {
  return (
    <SearchComponent {...props}>
      <SearchBlock>
        <SearchIcon />
        <SearchInput placeholder="Search Jobs" />
      </SearchBlock>
      <SearchBlockDelimiter />
      <LocationBlock>
        <LocationButton />
        <Button size="large" color="white" backgroundColor="#0187E0">
          Search
        </Button>
      </LocationBlock>
    </SearchComponent>
  );
})``;
