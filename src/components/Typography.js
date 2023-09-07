import PropTypes from 'prop-types';

const Typography = ({ tag, children, className }) => {
  const Tag = tag || 'span';
  const classList = [className];

  const baseHeadingStyles = ['font-bold'];

  switch (tag) {
    case 'h1':
      classList.push(baseHeadingStyles);
      classList.push('text-3xl text-green');
      classList.push('sm:text-4xl');
      classList.push('md:text-5xl');
      break;
    case 'h2':
      classList.push(baseHeadingStyles);
      classList.push('text-2xl');
      classList.push('sm:text-3xl');
      classList.push('md:text-4xl');
      break;
    case 'h3':
      classList.push(baseHeadingStyles);
      classList.push('text-xl');
      classList.push('sm:text-2xl');
      classList.push('md:text-3xl');
      break;
    default:
      console.log(`No tag match.`);
  }

  return <Tag className={classList.join(' ')}>{children}</Tag>;
};

Typography.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  tag: PropTypes.string,
};

export default Typography;
