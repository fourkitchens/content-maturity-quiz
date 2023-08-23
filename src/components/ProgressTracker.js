/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ProgressTracker = ({ count, currentID }) => {
  const steps = [...Array(count)];

  return (
    <ul
      className={classNames('flex flex-row gap-4 items-center mx-auto w-min')}
    >
      {steps.map((v, i) => (
        <li
          key={i}
          className={classNames(
            'flex items-center justify-center',
            'rounded-full aspect-square',
            'text-xs font-semibold',
            {
              'w-[28px] h-[28px] bg-yellow text-gray-400':
                i !== currentID && i < currentID,
            },
            { 'w-[28px] h-[28px] bg-gold-500 text-gray': i !== currentID },
            { 'w-[36px] h-[36px] bg-green text-white': i === currentID }
          )}
        >
          {i + 1}
        </li>
      ))}
    </ul>
  );
};

ProgressTracker.propTypes = {
  count: PropTypes.number.isRequired,
  currentID: PropTypes.number.isRequired,
};

export default ProgressTracker;
