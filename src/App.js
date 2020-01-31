import React, { useEffect, useState } from "react";
import { getStoryIds } from "./services/hnAPI";
import { StoriesContainer } from "./containers/StoriesContainer";

import "./App.css";

export const App = () => <StoriesContainer />;
