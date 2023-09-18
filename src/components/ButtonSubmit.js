import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Underline(props) {
  return (
    <svg viewBox="0 0 141 9" fill="none" {...props}>
      <path
        d="M2.41256 6.22467C19.7092 4.09854 71.0272 0.832086 137.927 4.7753"
        stroke="#EFBF4D"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength="1"
      />
    </svg>
  );
}

export default function ButtonSubmit({ children }) {
  const [hoverStateActive, sethoverStateActive] = useState(false);

  const handleOnMouseEnter = () => {
    sethoverStateActive(true);
  };

  const handleOnMouseLeave = () => {
    sethoverStateActive(false);
  };

  return (
    <button
      type="submit"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className={classNames(
        'bg-green inline-block rounded-lg group relative',
        'px-4 py-[0.81rem] block w-full',
        'sm:inline-block sm:w-auto sm:text-center',
        'text-white text-center text-base no-underline'
      )}
    >
      <div className="relative whitespace-nowrap">
        {children}
        <Underline
          className="w-[150px] absolute -bottom-2 left-0 right-0 transition-all hidden md:block"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: hoverStateActive ? 0 : 1,
            opacity: hoverStateActive ? '100%' : '0%',
          }}
        />
      </div>
    </button>
  );
}

ButtonSubmit.propTypes = {
  children: PropTypes.any.isRequired,
};
