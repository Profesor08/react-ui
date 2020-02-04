import React from "react";
import styled from "styled-components";
import { Weather } from "../components/Weather";
import { LogoIcon, ArrowIcon } from "../components/Icons";
import { RegularButton } from "../components/Button";
import { NavLink } from "react-router-dom";

const MainPageElement = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => props.theme.backgroundPrimary};
  display: flex;
`;

const MainPageContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  order: 2;
`;

const Logo = styled(LogoIcon)`
  width: 60px;
  height: 40px;
`;

const WelcomeHeading = styled.h1`
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: ${props => props.theme.textPrimary};
`;

const WelcomeText = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.theme.textSecondary};
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 30px 30px 30px 25px;

  ${Logo} {
    margin-bottom: 17px;
  }

  ${WelcomeHeading} {
    margin-bottom: 16px;
  }
`;

const MainPageFooter = styled.div`
  padding: 30px 30px 50px 25px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
`;

const PageFooterText = styled.div`
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  color: ${props => props.theme.textPrimary};
`;

const LoginButton = styled(NavLink)`
  text-decoration: none;

  ${RegularButton} {
    width: 100%;
  }
`;

export const MainPage = styled(({ ...props }) => {
  return (
    <MainPageElement {...props}>
      <MainPageContent>
        <Weather />
        <Welcome>
          <Logo />
          <WelcomeHeading>eWalle</WelcomeHeading>
          <WelcomeText>
            Open An Account For Digital E-Wallet Solutions.Instant Payouts.
            <br />
            <br />
            Join For Free.
          </WelcomeText>
        </Welcome>
        <MainPageFooter>
          <LoginButton to="/wallet">
            <RegularButton>
              Sign in
              <ArrowIcon />
            </RegularButton>
          </LoginButton>
          <PageFooterText>Create an account</PageFooterText>
        </MainPageFooter>
      </MainPageContent>
      <svg
        width="133"
        height="812"
        viewBox="0 0 133 812"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="-2.33337" width="135" height="135" fill="#FF356B" />
        <rect x="-2.33337" width="67.6667" height="67.6667" fill="#FFAC30" />
        <rect
          x="-2.33337"
          y="67.6666"
          width="67.6667"
          height="67.6667"
          fill="#FFAC30"
        />
        <rect x="65.1666" y="67.5" width="67.5" height="67.5" fill="#3A4276" />
        <path
          d="M66.5 120C95.3223 120 118 96.1102 118 67.5C118 38.8898 95.3223 15 66.5 15C37.6777 15 15 38.8898 15 67.5C15 96.1102 37.6777 120 66.5 120Z"
          fill="#58D8F4"
          stroke="white"
          stroke-width="30"
        />
        <rect y="270" width="133" height="136" fill="#FF356B" />
        <rect
          x="-2.33337"
          y="338.333"
          width="67.6667"
          height="67.6667"
          fill="#FFAC30"
        />
        <circle
          cx="66.3"
          cy="338.3"
          r="51.3"
          fill="#58D8F4"
          stroke="white"
          stroke-width="30"
        />
        <path d="M65 270H133V407H65V270Z" fill="#3A4276" />
        <rect x="-2.33337" y="135" width="135" height="135.833" fill="white" />
        <path
          d="M-2.33337 135H65.3333V202.667L31.5 168.833L-2.33337 135Z"
          fill="#FFAC30"
        />
        <path
          d="M65.3333 202.5L-2.33341 202.5L-2.33341 134.833L31.4999 168.667L65.3333 202.5Z"
          fill="white"
        />
        <path
          d="M-2.33337 202.5H65.3333L30.1466 237.687L-2.33337 270.167V202.5Z"
          fill="#FF356B"
        />
        <path
          d="M65.3333 270.667H-2.33341L31.4999 236.833L65.3333 203L65.3333 270.667Z"
          fill="white"
        />
        <path
          d="M98.9166 169.167L132.667 135V203.333H65.1666L98.9166 169.167Z"
          fill="#58D8F4"
        />
        <rect
          x="-2.33337"
          y="405.833"
          width="135"
          height="135.833"
          fill="white"
        />
        <path
          d="M98.9166 507.5L132.667 473.333V541.667H65.1666L98.9166 507.5Z"
          fill="#FF356B"
        />
        <path
          d="M65.1667 472.392L-2.33337 541.667L-2.33337 405.833L132.667 405.833L65.1667 472.392Z"
          fill="#FFAC30"
        />
        <rect x="-2.33337" y="541.667" width="135" height="135" fill="white" />
        <path
          d="M65.3334 607.647L-2.33327 676.667L-2.33327 541.333H133L65.3334 607.647Z"
          fill="#58D8F4"
        />
        <path
          d="M-2.33337 541.333H65.3333V609L31.5 575.167L-2.33337 541.333Z"
          fill="#3A4276"
        />
        <path
          d="M-2.33337 608.667H65.3333V676.333L31.5 642.5L-2.33337 608.667Z"
          fill="#3A4276"
        />
        <path
          d="M132.667 676.667C114.72 676.667 97.509 669.538 84.819 656.848C72.1291 644.158 64.9999 626.946 64.9999 609C64.9999 591.054 72.1291 573.842 84.819 561.152C97.509 548.463 114.72 541.333 132.667 541.333L132.667 609V676.667Z"
          fill="#58D8F4"
        />
        <rect y="676" width="133" height="136" fill="white" />
        <path
          d="M133 810C115.23 810 97.5221 802.941 84.9572 790.376C72.3922 777.811 65.3333 760.77 65.3333 743C65.3333 725.231 72.3922 708.189 84.9571 695.624C97.5221 683.059 115.23 676 133 676L133 743L133 810Z"
          fill="#FF356B"
        />
        <path
          d="M-1.5 676C16.1369 676 33.0514 683.112 45.5226 695.77C57.9938 708.429 65 725.598 65 743.5C65 761.402 57.9938 778.571 45.5226 791.23C33.0514 803.888 16.1369 811 -1.49999 811V784.032C9.09045 784.032 19.2471 779.762 26.7357 772.16C34.2243 764.559 38.4313 754.25 38.4313 743.5C38.4313 732.75 34.2243 722.441 26.7357 714.84C19.2471 707.238 9.09045 702.968 -1.5 702.968V676Z"
          fill="#58D8F4"
        />
        <path
          d="M132.667 270.833H65.1666L65.1666 202.5L98.9166 236.667L132.667 270.833Z"
          fill="#3A4276"
        />
        <path
          d="M98.6666 340C98.6666 344.487 97.7828 348.93 96.0658 353.075C94.3488 357.22 91.8321 360.987 88.6594 364.159C85.4867 367.332 81.7202 369.849 77.5749 371.566C73.4296 373.283 68.9867 374.167 64.4999 374.167C60.0131 374.167 55.5702 373.283 51.4249 371.566C47.2796 369.849 43.5131 367.332 40.3404 364.159C37.1678 360.987 34.6511 357.22 32.934 353.075C31.217 348.93 30.3333 344.487 30.3333 340L64.4999 340H98.6666Z"
          fill="#FF356B"
        />
      </svg>
    </MainPageElement>
  );
})``;
