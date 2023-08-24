/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ProgressTracker = ({ count, currentID }) => {
  const steps = [...Array(count)];

  return (
    <div className="progress-tracker w-full overflow-x-auto py-2 mx-auto snap-x snap-mandatory">
      <ul
        className={classNames(
          'flex flex-row items-center min-[485px]:justify-center',
          'w-max pr-10 min-[485px]:pr-0'
        )}
      >
        {steps.map((v, i) => (
          <li
            key={i}
            className={classNames(
              'px-2 md:px-4 relative',
              'after:content-[""] after:block after:h-[6px]',
              'after:absolute after:left-0 after:right-0 after:top-[40%] after:translate-x-1/2 after:-z-40',
              { ' after:bg-gold-500': i !== currentID - 1 && i >= currentID },
              {
                'after:bg-yellow': i !== currentID && i < currentID,
              },
              {
                'after:bg-gradient-to-r after:from-yellow after:to-green-300 after:z-30 after:left-6':
                  i === currentID - 1,
              },
              {
                'snap-center': i === currentID,
              },
              { ' after:content-none': i === steps.length - 1 }
            )}
          >
            <span
              className={classNames(
                'flex items-center justify-center relative -z-10',
                'rounded-full aspect-square',
                'text-xs font-semibold',
                {
                  'w-[28px] h-[28px] bg-yellow text-gray-400':
                    i !== currentID && i < currentID,
                },
                { 'w-[28px] h-[28px] bg-gold-500 text-gray': i !== currentID },
                { 'w-[36px] h-[36px] bg-green-300 text-white': i === currentID }
              )}
            >
              {i + 1}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProgressTracker.propTypes = {
  count: PropTypes.number.isRequired,
  currentID: PropTypes.number.isRequired,
};

export default ProgressTracker;
