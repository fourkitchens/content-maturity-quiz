'use client';

import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ScoreContext from './ScoreContext';
import QuestionsContext from './QuestionsContext';
/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import q from '@/data/questions.json';

export default function Providers({ children }) {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(q);
  const scoreValue = useMemo(() => ({ score, setScore }), [score]);
  const questionValue = useMemo(
    () => ({ questions, setQuestions }),
    [questions]
  );

  return (
    <QuestionsContext.Provider value={questionValue}>
      <ScoreContext.Provider value={scoreValue}>
        {children}
      </ScoreContext.Provider>
    </QuestionsContext.Provider>
  );
}

Providers.propTypes = {
  children: PropTypes.any,
};
