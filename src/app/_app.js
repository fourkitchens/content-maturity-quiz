import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

export default function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  foo: PropTypes.any,
};
