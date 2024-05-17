import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as Fathom from 'fathom-client';

const LeftArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g clipPath="url(#clip0_1609_2226)">
      <path
        d="M5.50316 3.21879C5.67816 3.36566 5.75004 3.55629 5.75004 3.75004C5.75004 3.94379 5.67816 4.13441 5.50316 4.25316L2.56066 7.25004H15.25C15.6657 7.25004 16 7.58754 16 8.00004C16 8.41254 15.6641 8.75004 15.25 8.75004H2.56066L5.53035 11.7197C5.82332 12.0127 5.82332 12.4872 5.53035 12.7804C5.23738 13.0735 4.76285 13.0733 4.46973 12.7804L0.219727 8.53035C-0.0732422 8.23738 -0.0732422 7.76285 0.219727 7.46973L4.46973 3.21973C4.76254 2.92691 5.23754 2.92691 5.50316 3.21879Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1609_2226">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g clipPath="url(#clip0_1609_2234)">
      <path
        d="M10.4968 3.21879C10.3218 3.36566 10.25 3.55629 10.25 3.75004C10.25 3.94379 10.3218 4.13441 10.4968 4.25316L13.4393 7.25004H0.749961C0.334336 7.25004 -3.8147e-05 7.58754 -3.8147e-05 8.00004C-3.8147e-05 8.41254 0.335898 8.75004 0.749961 8.75004H13.4393L10.4696 11.7197C10.1767 12.0127 10.1767 12.4872 10.4696 12.7804C10.7626 13.0735 11.2371 13.0733 11.5303 12.7804L15.7803 8.53035C16.0732 8.23738 16.0732 7.76285 15.7803 7.46973L11.5303 3.21973C11.2375 2.92691 10.7625 2.92691 10.4968 3.21879Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1609_2234">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Pagination = ({ currentID, resultsPath }) => {
  const previousLink = currentID > 0 ? `/${currentID}` : '/';
  const nextLink = currentID < 9 ? `/${currentID + 2}` : resultsPath;

  return (
    <ul className="flex flex-row gap-4 items-center justify-between mx-auto my-10 p-0  text-base">
      <li>
        <a
          href={previousLink}
          className={classNames(
            'flex flex-row gap-2 items-center',
            'rounded-lg bg-white text-green-400 px-6 py-2',
            'border border-solid border-green-400',
            'transition-[top] relative top-0 hover:-top-1'
          )}
          onClick={() => {
            Fathom.trackEvent(`Previous ${previousLink}`);
          }}
        >
          <LeftArrowIcon /> {currentID === 0 ? 'Back to home' : 'Previous'}
        </a>
      </li>

      <li className="leading-tight text-center hidden sm:inline">
        Question {currentID + 1}/10
      </li>

      {currentID < 10 && (
        <li>
          <a
            href={nextLink}
            className={classNames(
              'flex flex-row gap-2 items-center',
              'rounded-lg bg-green text-white inline-block px-6 py-2',
              'border border-solid border-green',
              'transition-[top] relative top-0 hover:-top-1'
            )}
            onClick={() => {
              Fathom.trackEvent(`Next ${nextLink}`);
            }}
          >
            Next <RightArrowIcon />
          </a>
        </li>
      )}
    </ul>
  );
};

Pagination.propTypes = {
  currentID: PropTypes.number.isRequired,
  resultsPath: PropTypes.string,
};

export default Pagination;
