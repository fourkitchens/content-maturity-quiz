/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import PropTypes from 'prop-types';
import Image from 'next/image';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import CheckboxList from '@/components/CheckboxList';
import Typography from '@/components/Typography';
import Pagination from '@/components/Pagination';
import ProgressTracker from './ProgressTracker';
import QuestionsContext from '@/utils/QuestionsContext';
import q from '@/data/questions.json';
import calculateScore from '@/utils/calculateScore';

const QuestionLayout = ({ columns, currentID, image }) => {
  const { questions, setQuestions } = useContext(QuestionsContext);
  const [questionsLoaded, setQuestionsLoaded] = useState(false);
  const [resultsPath, setResultsPath] = useState('/');

  const { choices, shortname, type, question } =
    questions.questions[0][currentID];

  const setScorePath = (score) => {
    if (score >= 91) {
      setResultsPath('/results/strategic');
    } else if (score >= 61) {
      setResultsPath('/results/organized');
    } else if (score >= 41) {
      setResultsPath('/results/managed');
    } else if (score >= 31) {
      setResultsPath('/results/emerging');
    } else if (score > 0) {
      setResultsPath('/results/ad-hoc');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('contentQuizQuestions')) {
        setQuestions(JSON.parse(localStorage.getItem('contentQuizQuestions')));
      } else {
        setQuestions(q);
      }
      setQuestionsLoaded(true);
    }

    const score = calculateScore(questions.questions[0]);
    setScorePath(score);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="prose lg:max-w-[1000px] mx-auto space-y-8 md:space-y-14">
      <ProgressTracker currentID={currentID} />
      <Typography tag="h1" className="md:text-center px-4">
        {question}
        {type === 'multiple' && (
          <span className="text-xl md:text-2xl lg:text-3xl block font-normal mt-2">
            (Check all that apply)
          </span>
        )}
      </Typography>
      <section
        className={classNames('px-2 mt-8 md:px-8', {
          'md:grid md:gap-2 grid-cols-2': !columns,
        })}
      >
        <main className={classNames('col-start-2 relative z-20')}>
          <div className="space-y-4">
            <CheckboxList
              data={{ choices, shortname, type }}
              columns={columns}
              questionID={currentID}
              questionsLoaded={questionsLoaded}
            />
          </div>

          <Pagination currentID={currentID} resultsPath={resultsPath} />
        </main>

        {image && (
          <aside className="col-start-1 row-start-1 ">
            <Image
              src={image}
              alt=""
              className={classNames(
                'lg:w-[120%] lg:max-w-[120%] lg:-translate-x-[15%] lg:sticky',
                'sticky top-[10vh] block mt-10'
              )}
            />
          </aside>
        )}
      </section>
    </div>
  );
};

QuestionLayout.propTypes = {
  columns: PropTypes.bool,
  currentID: PropTypes.number.isRequired,
  image: PropTypes.any,
};

export default QuestionLayout;
