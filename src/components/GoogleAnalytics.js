import Script from 'next/script';

import PropTypes from 'prop-types';

const GoogleAnalytics = ({ gaID }) => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js? 
      id=${gaID}`}
    />
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaID}');
        `,
      }}
    />
  </>
);

GoogleAnalytics.propTypes = {
  gaID: PropTypes.string.isRequired,
};
export default GoogleAnalytics;
