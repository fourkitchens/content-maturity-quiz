import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as Fathom from 'fathom-client';

const ButtonOrange = ({ children, url, className }) => (
  <a
    href={url}
    className={classNames(
      'bg-orange text-white text-center',
      'rounded-lg transition-[top] relative top-0',
      'hover:-top-1',
      'py-3 px-5 block w-full',
      'sm:inline-block sm:w-auto',
      className
    )}
    onClick={() => {
      Fathom.trackEvent(`ButtonOrange ${url}`);
    }}
  >
    {children}
  </a>
);

ButtonOrange.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  url: PropTypes.string.isRequired,
};

export default ButtonOrange;
