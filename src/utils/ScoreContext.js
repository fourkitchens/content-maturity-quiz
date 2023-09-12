import { createContext } from 'react';

const ScoreContext = createContext({
  score: 0,
  setScore: () => {},
});

export default ScoreContext;
