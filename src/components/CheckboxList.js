/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import { easeInOut, useAnimate } from 'framer-motion';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import CheckboxImage from './CheckboxImage';
import RadioImage from './RadioImage';
import Scoreboard from './Scoreboard';
import QuestionsContext from '@/utils/QuestionsContext';
import { updateQuestions, makeQuestionsFalse } from '@/utils/updateQuestions';

const Checkbox = ({ id, name, text, type, value, isChecked, questionID }) => {
  const [scope, animate] = useAnimate();
  const inputType = type === 'single' ? 'radio' : 'checkbox';
  const { questions, setQuestions } = useContext(QuestionsContext);

  function handleRadioChange() {
    for (const [key] of Object.entries(
      questions.questions[0][questionID].choices
    )) {
      if (Number(key) === id) {
        updateQuestions(questions, setQuestions, questionID, id);
      } else {
        makeQuestionsFalse(questions, setQuestions, questionID, key);
      }
    }
  }

  function handleCheckboxChange() {
    updateQuestions(questions, setQuestions, questionID, id);
  }

  function handleChange(e) {
    if (inputType === 'radio') {
      handleRadioChange();
    } else {
      handleCheckboxChange();
    }

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
        {type === 'single' ? (
          <RadioImage className="block w-14" />
        ) : (
          <CheckboxImage className="block w-14" />
        )}

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

const PlaceholderCheckbox = () => (
  <div
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
    <div className="w-full space-y-2">
      <div className="h-[16px] w-full block bg-slate-300 rounded-sm relative overflow-hidden">
        <div className="animate-checkbox-placeholder absolute left-0 top-0 h-full w-1/2 block bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
      <div className="h-[16px] w-3/4 block bg-slate-300 rounded-sm relative overflow-hidden">
        <div className="animate-checkbox-placeholder absolute left-[-45%] h-full w-1/2 block bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </div>
  </div>
);

const CheckboxList = ({
  data,
  className,
  columns = false,
  questionID,
  questionsLoaded,
}) => {
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

      {choices.map((choice, i) =>
        questionsLoaded ? (
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
        ) : (
          <PlaceholderCheckbox key={i} />
        )
      )}
    </div>
  );
};

CheckboxList.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.bool,
  data: PropTypes.any,
  questionID: PropTypes.number.isRequired,
  questionsLoaded: PropTypes.bool,
};

export default CheckboxList;
