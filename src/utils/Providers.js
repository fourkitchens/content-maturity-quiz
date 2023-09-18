'use client';

import PropTypes from 'prop-types';
import { useState, useMemo, useEffect } from 'react';
import QuestionsContext from './QuestionsContext';
/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import q from '@/data/questions.json';

export default function Providers({ children }) {
  const [questions, setQuestions] = useState(q);
  const questionValue = useMemo(
    () => ({ questions, setQuestions }),
    [questions]
  );

  useEffect(() => {
    if (sessionStorage.getItem('contentQuizQuestions')) {
      setQuestions(JSON.parse(sessionStorage.getItem('contentQuizQuestions')));
    }
  }, []);

  return (
    <QuestionsContext.Provider value={questionValue}>
      {children}
    </QuestionsContext.Provider>
  );
}

Providers.propTypes = {
  children: PropTypes.any,
};
