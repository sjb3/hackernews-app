import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnAPI";
import { Story } from "../components/Story";
import { H1 } from "../styles/StoryStyles";
import {
  GlobalStyle,
  StoriesContainerWrapper
} from "../styles/StoriesContainerStyles";
import { useInfineteScroll } from "../hooks/useInfiniteScroll";

export const StoriesContainer = () => {
  const { count } = useInfineteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds()
      .then(data => setStoryIds(data))
      .catch(err => console.error(err));
    console.log(">>> count", count);

    // getStory(20970623).then(data => console.log(data));
  }, [count]);

  // [] when the component mounts, do this...
  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <H1>Hacker News Stand</H1>
        {storyIds.slice(0, count).map(storyId => (
          <Story storyId={storyId} key={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
