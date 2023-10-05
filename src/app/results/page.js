/* eslint-disable no-fallthrough */

'use client';

/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import { redirect } from 'next/navigation';
import { useContext } from 'react';
import calculateScore from '@/utils/calculateScore';
import QuestionsContext from '@/utils/QuestionsContext';

export default function Results() {
  const { questions, setQuestions } = useContext(QuestionsContext);
  const score = calculateScore(questions.questions[0]);

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('contentQuizQuestions')) {
      setQuestions(JSON.parse(localStorage.getItem('contentQuizQuestions')));
    }
  }

  switch (true) {
    case score >= 91:
      redirect('/results/strategic');
    case score >= 61:
      redirect('/results/organized');
    case score >= 41:
      redirect('/results/managed');
    case score >= 31:
      redirect('/results/emerging');
    case score > 0:
      redirect('/results/ad-hoc');
    default:
      redirect('/');
  }
}
