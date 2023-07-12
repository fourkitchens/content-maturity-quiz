'use client';

import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import classNames from 'classnames';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const wrapper = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    if (content.current.offsetHeight <= wrapper.current.offsetHeight) {
      wrapper.current.classList.add('near-bottom');
    } else {
      wrapper.current.classList.remove('near-bottom');
    }
  }, []);

  const handleScroll = () => {
    const threshold =
      content.current.scrollHeight - content.current.offsetHeight * 1.2;

    if (content.current.scrollTop > threshold) {
      wrapper.current.classList.add('near-bottom');
    } else {
      wrapper.current.classList.remove('near-bottom');
    }
  };

  return (
    <div className="min-h-screen h-screen p-4 flex flex-col flex-nowrap">
      <div
        className={classNames(
          'wrapper',
          'border border-solid border-gold',
          'relative',
          'transition-all'
        )}
        ref={wrapper}
      >
        <Navbar />
        <div
          className={classNames('content', 'overflow-scroll', 'p-8')}
          onScroll={handleScroll}
          ref={content}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
