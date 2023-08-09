'use client';

import PropTypes from 'prop-types';
import { useRef } from 'react';
import classNames from 'classnames';
/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@/assets/logo.svg';

export default function Border({ children }) {
  const wrapper = useRef(null);

  return (
    <div className="flex flex-col flex-nowrap overflow-hidden">
      <div className={classNames('wrapper relative')} ref={wrapper}>
        <Link href="/">
          <Image
            src={logoImage}
            alt=""
            className="max-w-[200px] mx-auto my-8"
          />
        </Link>
        {children}
        <footer className="py-10">
          <p className="text-center font-bold text-gray">
            Cooked up by{' '}
            <a href="https://fourkitchens.com" className="text-green underline">
              Four Kitchens
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

Border.propTypes = {
  children: PropTypes.any,
};
