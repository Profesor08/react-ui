import React from "react";
import styled from "styled-components";
import { WeatherIcon } from "./Icons";

const WeatherTime = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: ${props => props.theme.textPrimary};
`;

const WeatherTemperature = styled.div`
  font-weight: 600;
  font-size: 13px;
  color: ${props => props.theme.textPrimary};
`;

const WeatherDate = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: ${props => props.theme.textSecondary};
`;

const WeatherRow = styled.div`
  display: flex;
  align-items: center;

  ${WeatherTime} {
    margin-right: auto;
  }

  ${WeatherTemperature} {
    margin-left: 8px;
  }
`;

const WeatherElement = styled.div`
  padding: 30px 30px 30px 25px;

  ${WeatherDate} {
    margin-top: 7px;
  }
`;

export const Weather = styled(({ ...props }) => (
  <WeatherElement {...props}>
    <WeatherRow>
      <WeatherTime>06:20 PM</WeatherTime>
      <WeatherIcon />
      <WeatherTemperature>34° C</WeatherTemperature>
    </WeatherRow>
    <WeatherDate>Nov.10.2020 | Wednesday</WeatherDate>
  </WeatherElement>
))``;
