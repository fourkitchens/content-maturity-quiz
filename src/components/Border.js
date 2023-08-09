'use client';

import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import classNames from 'classnames';
/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@/assets/logo.svg';

export default function Border({ children }) {
  const wrapper = useRef(null);
  const content = useRef(null);

  return (
    <div className="p-2 md:p-4 flex flex-col flex-nowrap">
      <div
        className={classNames(
          'wrapper near-bottom',
          'relative',
          'transition-all'
        )}
        ref={wrapper}
      >
        <div
          className={classNames('content', 'overflow-scroll', 'p-8')}
          ref={content}
        >
          <Link href="/">
            <Image
              src={logoImage}
              alt=""
              className="max-w-[200px] mx-auto mb-8"
            />
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}

Border.propTypes = {
  children: PropTypes.any,
};
