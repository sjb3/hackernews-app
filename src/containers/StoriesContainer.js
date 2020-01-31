import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnAPI";
import { Story } from "../components/Story";
import { H1 } from "../styles/StoryStyles";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds()
      .then(data => setStoryIds(data))
      .catch(err => console.error(err));

    // getStory(20970623).then(data => console.log(data));
  }, []);

  // [] when the component mounts, do this...
  return (
    <>
      <H1>Hacker News Stand</H1>
      {storyIds.map(storyId => (
        <Story storyId={storyId} key={storyId} />
      ))}
    </>
  );
};
