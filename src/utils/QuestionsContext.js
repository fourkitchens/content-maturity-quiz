import { createContext } from 'react';

const QuestionsContext = createContext({
  questions: 0,
  setQuestions: () => {},
});

export default QuestionsContext;
