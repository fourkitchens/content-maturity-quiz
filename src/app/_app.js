/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import PropTypes from 'prop-types';
import Script from 'next/script';
// import { useState, useMemo } from 'react';
// import ScoreContext from '@/utils/ScoreContext';

export default function MyApp({ Component, pageProps }) {
  // const [score, setScore] = useState();
  // const value = useMemo(() => ({ score, setScore }), [score]);

  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER ? (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}');
          `}
        </Script>
      ) : null}

      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
