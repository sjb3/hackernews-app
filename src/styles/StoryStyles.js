import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Zhi Mang Xing", cursive;
`;

export const StoryWrapper = styled.section`
  padding-top: 20px;
  margin-bottom: 20px;
  border-top: 1px solid grey;
  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const StoryTitle = styled.h2`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;

  a {
    color: #2e2e2e;
    background: mintcream;
    text-decoration: none;
  }
`;

export const StoryMeta = styled.div`
  font-style: italic;

  > span:not(:first-child):before {
    content: ".";
    margin: 0 7px;
  }

  .story__meta-bold {
    font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${props => props.color || "pink"};
`;
