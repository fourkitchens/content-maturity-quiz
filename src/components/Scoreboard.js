/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import classNames from 'classnames';
import { useContext } from 'react';
import ScoreContext from '@/utils/ScoreContext';

const Scoreboard = () => {
  const { score } = useContext(ScoreContext);

  return (
    <div
      className={classNames(
        'flex flex-col items-center gap-0 bg-slate-100 w-max p-4 rounded-lg fixed right-6 top-4 z-50 ',
        'border border-solid border-slate-400',
        'font-bold text-3xl shadow-xl'
      )}
    >
      <span className="inline-block text-sm">SCORE</span>
      {score}
    </div>
  );
};

export default Scoreboard;
