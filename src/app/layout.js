import classNames from 'classnames';
import './globals.css';
import { Aleo } from 'next/font/google';
import PropTypes from 'prop-types';
/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import metadataDefaults from '@/data/metadata';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const aleo = Aleo({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: metadataDefaults.title,
  description: metadataDefaults.description,
  image: metadataDefaults.image,
  openGraph: {
    title: metadataDefaults.title,
    description: metadataDefaults.description,
    images: [
      {
        url: metadataDefaults.image,
        width: 1800,
        height: 1600,
      },
    ],
    other: {
      'twitter:label1': 'Estimated time:',
      'twitter:data1': '3 minutes',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={classNames(
          'bg-bg text-lg lg:text-xl text-dark font-medium relative',
          'm-2 border border-solid border-gold',
          'after:content-[""] after:absolute after:-inset-1 after:-z-10',
          'after:border after:border-solid after:border-gold',
          'cursor-arrow',
          aleo.className
        )}
      >
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics gaID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {children}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.any,
};
