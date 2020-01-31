import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnAPI";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from "../styles/StoryStyles";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId)
      .then(data => data && data.url && setStory(data))
      .catch(err => console.error(err));
  }, []);

  return story ? (
    <StoryWrapper>
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span className="story__by" data-testid="story-by">
          <StoryMetaElement>by: </StoryMetaElement>
          <p>{story.by}</p>
          <StoryMetaElement>posted: </StoryMetaElement>
          <p>{story.time}</p>
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};
