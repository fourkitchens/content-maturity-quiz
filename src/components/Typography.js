import PropTypes from 'prop-types';
import classNames from 'classnames';

const Typography = ({ tag, children, className }) => {
  const Tag = tag || 'span';
  const classList = [className];

  const baseHeadingStyles = ['font-bold'];

  switch (tag) {
    case 'h1':
      classList.push(baseHeadingStyles);
      classList.push('text-3xl text-green');
      classList.push('sm:text-5xl');
      break;
    case 'h2':
      classList.push(baseHeadingStyles);
      classList.push('text-2xl');
      classList.push('sm:text-3xl');
      break;
    case 'h3':
      classList.push(baseHeadingStyles);
      classList.push('text-xl');
      break;
    default:
      console.log(`Sorry, we are out of.`);
  }

  return <Tag className={classList.join(' ')}>{children}</Tag>;
};

Typography.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  tag: PropTypes.string,
};

export default Typography;
