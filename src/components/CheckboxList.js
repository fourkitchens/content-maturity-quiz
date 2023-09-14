/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import { easeInOut, useAnimate } from 'framer-motion';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import CheckboxImage from './CheckboxImage';
import Scoreboard from './Scoreboard';
import QuestionsContext from '@/utils/QuestionsContext';
import updateQuestions from '@/utils/updateQuestions';

const Checkbox = ({ id, name, text, type, value, isChecked, questionID }) => {
  const [scope, animate] = useAnimate();
  const inputType = type === 'single' ? 'radio' : 'checkbox';
  const { questions, setQuestions } = useContext(QuestionsContext);

  function handleChange(e) {
    updateQuestions(questions, setQuestions, questionID, id);

    if (e.target.checked) {
      animate(
        scope.current,
        { top: [0, 35, 0] },
        { duration: 0.15 },
        { ease: easeInOut }
      );
    }
  }

  return (
    <div>
      <input
        type={inputType}
        id={name + id}
        name={type === 'single' ? name : `${name}+${id}`}
        onClick={handleChange}
        className={classNames('peer hidden')}
        value={value}
        defaultChecked={isChecked}
      />
      <label
        ref={scope}
        htmlFor={name + id}
        className={classNames(
          'p-4 flex flex-row gap-4 items-center rounded-lg transition-checkbox relative',
          'border border-green-200 border-solid bg-white',
          'leading-tight cursor-arrow',
          'hover:scale-[102%]',
          'lg:p-8',
          'peer-checked:bg-beige',
          'h-full'
        )}
      >
        <CheckboxImage className="block w-14" />
        <span className="relative top-[.2rem]">{text}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.any.isRequired,
  isChecked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  questionID: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

const CheckboxList = ({ data, className, columns = false, questionID }) => {
  const { choices, shortname, type } = data;

  return (
    <div
      className={classNames(
        { 'space-y-4': !columns },
        { 'grid gap-4 grid-cols-1 md:grid-cols-2': columns },
        className
      )}
    >
      <Scoreboard />

      {choices.map((choice, i) => (
        <Checkbox
          className="self-stretch"
          id={i}
          isChecked={choice.checked}
          key={i}
          name={shortname}
          questionID={questionID}
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
  columns: PropTypes.bool,
  data: PropTypes.any,
  questionID: PropTypes.number.isRequired,
};

export default CheckboxList;
