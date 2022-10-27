import React from "react";
import { IoTrendingUpSharp, IoLogoGithub } from "react-icons/io5";
import {
  TrendingHeader,
  TrendingIconProvider,
  TrendingList,
  TrendingStyled,
  TrendingStyledSticky,
  AboutSection,
} from "../Components/RightBarComponents";

export default function TrendingSection() {
  return (
    <TrendingStyled>
      <TrendingStyledSticky>
        <TrendingHeader>Trending</TrendingHeader>
        <TrendingList>
          <li>
            <TrendingIconProvider>
              <IoTrendingUpSharp />
            </TrendingIconProvider>
            <span>Elon Musk On Mars</span>
          </li>
          <li>
            <TrendingIconProvider>
              <IoTrendingUpSharp />
            </TrendingIconProvider>
            <span>Pandas Eating Bamboo</span>
          </li>
          <li>
            <TrendingIconProvider>
              <IoTrendingUpSharp />
            </TrendingIconProvider>
            <span>Pineapple</span>
          </li>
          <li>
            <TrendingIconProvider>
              <IoTrendingUpSharp />
            </TrendingIconProvider>
            Biggest Burger
          </li>
          <li>
            <TrendingIconProvider>
              <IoTrendingUpSharp />
            </TrendingIconProvider>
            Cute Cats
          </li>
        </TrendingList>
      </TrendingStyledSticky>
      <AboutSection href="https://github.com/benny-sit">
        <span>created by benny-sit</span>
        <IoLogoGithub />
      </AboutSection>
    </TrendingStyled>
  );
}
