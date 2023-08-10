import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

function Underline(props) {
  return (
    <svg viewBox="0 0 141 9" fill="none" {...props}>
      <path
        d="M2.41256 6.22467C19.7092 4.09854 71.0272 0.832086 137.927 4.7753"
        stroke="#EFBF4D"
        strokeWidth="4.5301"
        strokeLinecap="round"
        pathLength="1"
      />
    </svg>
  );
}

export default function ButtonTakeQuiz({ children, url }) {
  const [hoverStateActive, sethoverStateActive] = useState(false);

  const handleOnMouseEnter = () => {
    sethoverStateActive(true);
  };

  const handleOnMouseLeave = () => {
    sethoverStateActive(false);
  };

  return (
    <Link
      href={url}
      className={classNames(
        'bg-green inline-block rounded-lg transition-all group',
        'py-3 px-4 block w-full',
        'sm:inline-block sm:w-auto sm:text-center',
        'sm:pt-5 sm:pb-5 sm:px-10 ',
        'text-white text-center text-2xl no-underline'
      )}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <div className="relative">
        {children}
        <Underline
          className="w-[113px] absolute -bottom-1 left-0 right-0 transition-all hidden md:block"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: hoverStateActive ? 0 : 1,
            opacity: hoverStateActive ? '100%' : '0%',
          }}
        />
      </div>
    </Link>
  );
}

ButtonTakeQuiz.propTypes = {
  children: PropTypes.any,
  url: PropTypes.string.isRequired,
};
