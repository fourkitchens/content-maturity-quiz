'use client';

import { motion } from 'framer-motion';
/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Image from 'next/image';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Layout from '@/components/Layout';
import ButtonTakeQuiz from '@/components/ButtonTakeQuiz';
import Typography from '@/components/Typography';
import heroImage from '@/assets/home/hero.png';
import spiralImage from '@/assets/home/spiral.svg';
import quizByImage from '@/assets/home/quiz-by-4k.png';
import contentImage from '@/assets/home/content.png';
import contentSmallImage from '@/assets/home/content-small.png';
import decorationImage from '@/assets/home/decoration.svg';

const Section = ({ children, className }) => (
  <section className={classNames('mb-10 mt-14 px-8', className)}>
    <div className="space-y-6 max-w-[600px] mx-auto">{children}</div>
  </section>
);

Section.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default function Home() {
  return (
    <Layout>
      <motion.div
        initial={{
          opacity: 0,
          x: '50vw',
        }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', duration: 0.5 }}
      >
        <Section className="mt-14">
          <Typography tag="h1" className="text-center">
            How{' '}
            <span className="relative after:content-[''] after:bg-burst-top after:bg-no-repeat after:bg-contain after:absolute after:h-[30px] after:left-0 after:right-0 after:top-[-25px] after:block sm:after:h-[35px] sm:after:left-2 sm:after:top-[-35px]">
              effective
            </span>{' '}
            is your content strategy organization?
          </Typography>
          <Image
            src={heroImage}
            alt=""
            className="mx-auto sm:!-mt-6 -z-10 relative"
          />
          <p>
            We’ve created a Content Maturity Assessment to help you answer that
            question.
          </p>
          <ButtonTakeQuiz url="/two">Take the quiz</ButtonTakeQuiz>
          <hr className="!mt-14 border-t-0 border-b border-solid border-gold" />
        </Section>

        <Section>
          <Typography tag="h2">
            Let’s talk about{' '}
            <span
              className={classNames(
                'relative',
                "after:content-[''] after:bg-oval after:bg-no-repeat after:bg-contain after:absolute after:block after:-z-[1]",
                'after:-top-6 after:-bottom-8 after:-left-2 after:-right-3',
                'sm:after'
              )}
            >
              Content
            </span>
          </Typography>
          <p>
            Your website is how you tell your story, achieve your goals, and
            make a difference. So, how do you protect your investment and ensure
            the content on your website works for your organization rather than
            against it?
          </p>

          <Typography
            tag="h3"
            className="ml-[25vw] !my-16 !mb-20 relative home-your-content @container"
          >
            <Image
              src={contentSmallImage}
              alt=""
              className={classNames(
                'absolute -left-[190px] -top-4 -z-10 max-h-[300px] w-[270px] max-w-none',
                '@[248px]:-top-6 @[248px]:-left-[190px] @[248px]:w-[250px]',
                '@[315px]:-top-11 @[315px]:-left-[190px]'
              )}
            />
            It should go without saying, but the better your content strategy
            practices, the better{' '}
            <span className="relative whitespace-nowrap after:content-[''] after:bg-content-underline after:bg-no-repeat after:bg-contain after:absolute after:block after:-bottom-[23px] after:-left-0 after:right-0 after:-z-[1] after:h-full">
              your content.
            </span>
          </Typography>

          <p>
            But what does better mean? The answer lies in understanding your
            content strategy maturity.
          </p>
          <Image src={spiralImage} alt="" className="mx-auto !my-10" />
          <p>
            Content strategy maturity takes a big picture view of how you
            create, manage, and measure content across your organization. It
            empowers you to define “better” and to plot a course for getting
            there.
          </p>
          <p>
            Empowered by a shared understanding, content-first organizations can
            work more efficiently, effectively, and sustainably to achieve their
            goals.
          </p>
        </Section>

        <Section className="bg-beige bg-question-marks bg-no-repeat bg-300 sm:bg-cover bg-right py-10 sm:text-center relative">
          <Typography tag="h2">Why take this quiz?</Typography>
          <p className="sm:text-left">
            Our quiz dives into how an organization manages its content, from
            planning and creation to distribution and measurement. We'll
            evaluate your responses and identify opportunities for improvement,
            enabling you to level up your organizational content strategy.
          </p>
          <ButtonTakeQuiz url="/two">Take the quiz</ButtonTakeQuiz>
          <Image
            src={decorationImage}
            alt=""
            className="hidden sm:block absolute bottom-[-70px] right-[-170px]"
          />
        </Section>

        <Section>
          <Image
            src={quizByImage}
            alt=""
            className="sm:float-right sm:w-[46%] sm:relative sm:top-11"
          />
          <Typography tag="h2">
            Quiz by Four Kitchens. We make websites with love. For good
          </Typography>
          <p>
            We’d love to partner together on your journey to content maturity!
          </p>
          <a
            href="https://fourkitchens.com"
            className={classNames(
              'bg-orange text-white text-center',
              'rounded-lg transition-all relative top-0',
              'hover:-top-1',
              'py-3 px-5 block w-full',
              'sm:inline-block sm:w-auto'
            )}
          >
            Let's connect
          </a>
        </Section>
      </motion.div>
    </Layout>
  );
}
