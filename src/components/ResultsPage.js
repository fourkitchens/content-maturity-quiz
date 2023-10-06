'use client';

/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Image from 'next/image';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Layout from '@/components/Layout';
import windowImage from '@/assets/results/window.svg';
import resultsHeroImage from '@/assets/results/result-hero.svg';
import Section from '@/components/Section';
import quizByImage from '@/assets/home/quiz-by-4k.png';
import creditImage from '@/assets/results/credit.svg';
import Typography from '@/components/Typography';
import Divider from '@/components/Divider';
import ButtonOrange from '@/components/ButtonOrange';
import ResultsLevel from '@/components/ResultsLevel';
import resultsLevelData from '@/data/resultsLevelData';
import EmailResults from '@/components/EmailResults';

export default function ResultsPage({ level }) {
  const resultsLevel = level;

  return (
    <Layout>
      <Section className="relative !mt-[175px] md:!mt-[170px]">
        <div
          className={classNames(
            '[--window-image-width:350px] sm:[--window-image-width:402px] md:[--window-image-width:425px] lg:[--window-image-width:475px]',
            'w-[--window-image-width]',
            'inline-block text-center',
            'absolute -top-[150px] sm:-top-[15%] left-window-image'
          )}
        >
          <div
            className={classNames(
              'absolute top-[32%] md:top-[35%] right-0 bottom-0 left-0'
            )}
          >
            <p className="text-gray-300 uppercase font-semibold tracking-wider text-xl mb-1 md:mb-4">
              Your results
            </p>
            <h1
              className={classNames(
                'inline-block rounded-full z-20',
                'border-solid border-green',
                'px-6 pt-3 pb-2',
                'text-green leading-none',
                {
                  'border-4 text-3xl sm:text-4xl md:text-4xl':
                    resultsLevel <= 1,
                },
                {
                  'border-2 md:border-[3px] text-lg sm:text-xl md:text-2xl':
                    resultsLevel >= 2,
                }
              )}
            >
              {resultsLevelData[resultsLevel].title}
            </h1>
          </div>
          <Image
            src={windowImage}
            alt=""
            className="w-[--window-image-width]"
          />
        </div>

        <Image
          src={resultsHeroImage}
          alt=""
          className={classNames(
            'mx-auto -z-10 relative',
            'sm:!-mt-6 sm:!mb-11 md:!mb-24 lg:!mt-6 lg:!mb-36',
            'scale-[120%] lg:scale-[125%] xl:scale-125 '
          )}
        />

        <p className="!mt-[100px]">
          {resultsLevelData[resultsLevel].description}
        </p>
      </Section>

      <Divider />

      <EmailResults resultsLevel={resultsLevel} />

      <Divider />

      <ResultsLevel content={resultsLevelData[resultsLevel]} />

      <Divider />

      <Section className="!mt-20" wrapperClassName="lg:max-w-[960px]">
        <Image
          src={quizByImage}
          alt=""
          className="sm:float-right sm:w-[46%] sm:relative sm:top-11"
        />
        <Typography tag="h2">Ready for the next level?</Typography>
        <p>
          Driven by our content expertise, technical excellence, and
          partnerships rooted in shared values,{' '}
          <a href="https://www.fourkitchens.com">Four Kitchens</a> crafts
          websites that help organizations fulfill their missions.
        </p>
        <ButtonOrange url="https://www.fourkitchens.com">
          Let's talk content!
        </ButtonOrange>
      </Section>

      <Divider />

      <Section
        className="!mt-20"
        wrapperClassName="lg:max-w-[960px] md:flex md:flex-row md:gap-2 md:items-start"
      >
        <Image
          src={creditImage}
          alt=""
          className="sm:float-left sm:w-[46%] sm:relative sm:top-11 md:top-0"
        />
        <div className="space-y-6">
          <Typography tag="h2">Credit where credit is due</Typography>
          <p>
            We’ve adapted our maturity model from research conducted by Hilary
            Marsh, Carrie Hane, and Dina Lewis. Check out their findings if
            you’d like to learn more about content maturity!
          </p>
          <ButtonOrange url="#">Learn about their research</ButtonOrange>
        </div>
      </Section>
    </Layout>
  );
}

ResultsPage.propTypes = {
  level: PropTypes.number.isRequired,
};
