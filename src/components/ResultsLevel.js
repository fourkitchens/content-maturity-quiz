/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Image from 'next/image';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@/components/Typography';
import airplaneImage from '@/assets/results/airplane.svg';
import crossesImage from '@/assets/results/crosses.svg';
import bubbleImage from '@/assets/results/bubble.svg';
import heartImage from '@/assets/results/heart.svg';
import books from '@/assets/results/books.svg';
import laptop from '@/assets/results/laptop.svg';

const Section = ({ children, className }) => (
  <section className={classNames('max-w-[960px] mx-auto', className)}>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

const ResultsLevel = ({ content }) => {
  const { nextSteps, sections } = content;

  return (
    <article
      className={classNames('mb-10 !mt-14 sm:!mt-20 md:!mt-24 px-8 space-y-16')}
    >
      <section
        className={classNames(
          'space-y-6 max-w-[650px] mx-auto lg:max-w-[750px]'
        )}
      >
        <Typography tag="h1" className="text-center">
          <span
            className={classNames(
              "relative after:content-[''] after:bg-burst-top after:bg-no-repeat after:bg-contain after:absolute",
              'after:h-[30px] after:left-0 after:right-0 after:top-[-35px] after:block ',
              'sm:after:h-[35px] sm:after:left-8 sm:after:top-[-45px]'
            )}
          >
            Next Steps
          </span>
        </Typography>
        {nextSteps && <p>{nextSteps}</p>}
      </section>

      <Section className="md:grid md:grid-cols-2 lg:gap-8">
        <div>
          <Typography tag="h3" className="mb-4">
            <Image
              src={airplaneImage}
              alt=""
              className={classNames(
                'md:hidden float-right w-[150px] -ml-7 mt-[-1.7rem] airplane -rotate-12',
                'sm:rotate-0 sm:w-[200px] sm:-mt-16'
              )}
            />
            {sections[0].title}
          </Typography>
          <p>{sections[0].description}</p>
        </div>
        <Image
          src={airplaneImage}
          alt=""
          className={classNames(
            'hidden md:block w-[200px] justify-self-center self-center lg:justify-self-start'
          )}
        />
      </Section>

      <Section className="md:flex md:flex-row md:gap-4">
        <Image
          src={crossesImage}
          alt=""
          className={classNames('hidden md:block w-[100px]')}
        />
        <div>
          <Typography tag="h3" className="mb-4">
            <div className="flex flex-row gap-2 items-center justify-center mx-auto md:block">
              <Image
                src={crossesImage}
                alt=""
                className={classNames('md:hidden w-[50px] rotate-180')}
              />
              {sections[1].title}
              <Image
                src={crossesImage}
                alt=""
                className={classNames('md:hidden w-[50px]')}
              />
            </div>
          </Typography>
          <p>{sections[1].description}</p>
        </div>
        <Image
          src={crossesImage}
          alt=""
          className={classNames('hidden md:block w-[100px]')}
        />
      </Section>

      <Section className="md:grid md:grid-cols-2 lg:gap-8">
        <Image
          src={bubbleImage}
          alt=""
          className={classNames(
            'float-right w-[150px] bubble mr-[-1.2rem] mt-[2rem] p-4',
            'sm:w-[200px] sm:mt-0',
            'md:m-0 md:float-none md:justify-self-center',
            'lg:justify-self-end'
          )}
        />
        <div>
          <Typography tag="h3" className="mb-4">
            {sections[2].title}
          </Typography>
          <p>{sections[2].description}</p>
        </div>
      </Section>

      {sections[3] && (
        <Section className="md:grid md:grid-cols-2 lg:gap-8">
          <div>
            <Typography tag="h3" className="mb-4">
              {sections[3].title}
            </Typography>
            <p>
              <Image
                src={heartImage}
                alt=""
                className={classNames(
                  'w-[80px] float-left -ml-4 -mt-4 mr-4 heart',
                  'sm:w-[120px] md:hidden'
                )}
              />
              {sections[3].description}
            </p>
          </div>
          <Image
            src={heartImage}
            alt=""
            className={classNames(
              'w-[150px] justify-self-center lg:justify-self-start'
            )}
          />
        </Section>
      )}

      {sections[4] && (
        <Section className="md:flex md:flex-flow md:gap-8">
          <Image src={books} alt="" className="hidden md:block w-[130px]" />
          <div>
            <Typography tag="h3" className="mb-4">
              {sections[4].title}
            </Typography>
            <p>
              <Image
                src={books}
                alt=""
                className={classNames(
                  'w-[100px] float-right ml-3',
                  'sm:w-[150px] sm:-mt-8 md:hidden'
                )}
              />
              {sections[4].description}
            </p>
          </div>
          <Image src={books} alt="" className="hidden md:block w-[130px]" />
        </Section>
      )}

      {sections[5] && (
        <Section className="md:grid md:grid-cols-2 lg:gap-8">
          <Image
            src={laptop}
            alt=""
            className={classNames('w-[300px] self-center lg:justify-self-end')}
          />
          <div>
            <Typography tag="h3" className="mb-4">
              <Image
                src={laptop}
                alt=""
                className={classNames(
                  'w-[200px] mb-3',
                  'sm:w-[250px] md:hidden'
                )}
              />
              {sections[5].title}
            </Typography>
            <p>{sections[5].description}</p>
          </div>
        </Section>
      )}
    </article>
  );
};

ResultsLevel.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ResultsLevel;
