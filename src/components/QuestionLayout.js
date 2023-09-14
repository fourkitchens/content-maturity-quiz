/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import PropTypes from 'prop-types';
import Image from 'next/image';
import classNames from 'classnames';
import { useContext } from 'react';
import CheckboxList from '@/components/CheckboxList';
import Typography from '@/components/Typography';
import Pagination from '@/components/Pagination';
import ProgressTracker from './ProgressTracker';
import QuestionsContext from '@/utils/QuestionsContext';

const QuestionLayout = ({ columns, currentID, image }) => {
  const { questions } = useContext(QuestionsContext);
  const { choices, shortname, type, question } =
    questions.questions[0][currentID];

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
            />
          </div>

          <Pagination currentID={currentID} />
        </main>

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
      </section>
    </div>
  );
};

QuestionLayout.propTypes = {
  columns: PropTypes.number,
  currentID: PropTypes.number.isRequired,
  image: PropTypes.any,
};

export default QuestionLayout;
