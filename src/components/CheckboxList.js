import { easeInOut, useAnimate } from 'framer-motion';
/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CheckboxImage = ({ checked }) => (
  <svg
    width="30"
    height="28"
    viewBox="0 0 30 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="min-w-[30px]"
  >
    <path
      d="M19.5552 26.7215L19.5629 26.7199L19.5703 26.7173C19.6665 26.6835 19.785 26.6437 19.9198 26.5984C20.3313 26.4602 20.8948 26.271 21.4405 26.046L21.4405 26.046C26.9728 23.7621 30.9946 18.1651 29.0951 11.1008C28.2261 7.86409 26.1897 5.26628 23.2129 3.41999C18.5308 0.512994 13.6075 -0.0191497 8.47225 2.42398L8.47222 2.424C0.877161 6.03999 -0.227918 13.1725 1.71528 18.1658C4.03049 24.122 11.2518 28.5093 19.5552 26.7215ZM2.16004 15.5204L2.16003 15.5203C2.06039 15.0391 2.02601 14.552 1.99092 14.055C1.97524 13.8328 1.95941 13.6087 1.93757 13.3822L1.94151 13.3761L1.94076 13.338C1.84369 8.38137 5.39849 4.09837 10.2453 2.43068L10.2454 2.43066C12.3435 1.70765 14.5149 1.80891 16.7011 2.1497L16.7014 2.14973C19.4841 2.57807 22.0653 3.77342 24.1141 5.58119C26.1628 7.38888 27.5854 9.72622 28.201 12.2927L28.201 12.2928C29.7366 18.675 25.0702 24.9382 18.1352 26.0163L18.1352 26.0163C11.5271 27.0446 3.71736 23.064 2.16004 15.5204Z"
      fill="black"
      stroke="black"
      strokeWidth="0.25"
    />
    <path
      d="M7 14L9 19.5L22.5 9"
      stroke="black"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength="1"
      className={classNames('animate-checkbox-checked checkbox-checked', {
        hidden: !checked,
      })}
    />
  </svg>
);

CheckboxImage.propTypes = {
  checked: PropTypes.bool.isRequired,
};

const Checkbox = ({
  checked,
  checkedID,
  id,
  name,
  setCheckedID,
  text,
  type,
  value,
}) => {
  const [scope, animate] = useAnimate();
  const inputType = type === 'single' ? 'radio' : 'checkbox';
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  function handleChange(e) {
    if (e.target.checked) {
      const updateCheckIDValue = type === 'single' ? [id] : [id, ...checkedID];
      setCheckedID(updateCheckIDValue);
      animate(
        scope.current,
        { top: [0, 35, 0] },
        { duration: 0.15 },
        { ease: easeInOut }
      );
    } else {
      const index = checkedID.indexOf(id);
      if (index > -1) {
        checkedID.splice(index, 1);
      }
      setCheckedID(checkedID);
    }

    if (!e.target.checked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }

  return (
    <label
      ref={scope}
      htmlFor={name + id}
      className={classNames(
        'p-4 flex flex-row gap-4 rounded-lg transition-all relative',
        'border border-green-200 border-solid ',
        'leading-tight cursor-arrow',
        'hover:scale-[102%]',
        'lg:p-8',
        'checked:bg-black',
        { 'bg-beige': isChecked },
        { 'bg-white': !isChecked }
      )}
    >
      <input
        type={inputType}
        id={name + id}
        name={type === 'single' ? name : `${name}+${id}`}
        onChange={handleChange}
        className="hidden"
        checked={isChecked}
        value={value}
      />
      <CheckboxImage checked={isChecked} className="block w-14" />
      <span className="relative top-[.2rem]">{text}</span>
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  checkedID: PropTypes.array,
  setCheckedID: PropTypes.func.isRequired,
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

const CheckboxList = ({ data, className }) => {
  const { choices, shortname, type } = data;
  const [checkedID, setCheckedID] = useState(['']);

  return (
    <div className={classNames('space-y-4', className)}>
      {choices.map((choice, i) => (
        <Checkbox
          checked={checkedID.includes(choice.id)}
          checkedID={checkedID}
          id={choice.id}
          key={i}
          name={shortname}
          setCheckedID={setCheckedID}
          text={choice.text}
          type={type}
          value={choice.value}
        />
      ))}
    </div>
  );
};

CheckboxList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.any,
};

export default CheckboxList;
