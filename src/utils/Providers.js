'use client';

import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ScoreContext from './ScoreContext';

export default function Providers({ children }) {
  const [score, setScore] = useState(0);
  const value = useMemo(() => ({ score, setScore }), [score]);

  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
}

Providers.propTypes = {
  children: PropTypes.any,
};
