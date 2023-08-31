import PropTypes from 'prop-types';
import classNames from 'classnames';

const Section = ({ children, className, wrapperClassName }) => (
  <section className={classNames('mb-10 mt-14 px-8', className)}>
    <div
      className={classNames(
        'space-y-6 max-w-[650px] mx-auto lg:max-w-[750px]',
        wrapperClassName
      )}
    >
      {children}
    </div>
  </section>
);

Section.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

export default Section;
