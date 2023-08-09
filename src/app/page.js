'use client';

import { motion } from 'framer-motion';
/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Image from 'next/image';
import classNames from 'classnames';
import Border from '@/components/Border';
import ButtonTakeQuiz from '@/components/ButtonTakeQuiz';
import Typography from '@/components/Typography';
import heroImage from '@/assets/home/hero.png';
import spiralImage from '@/assets/home/spiral.svg';
import quizByImage from '@/assets/home/quiz-by-4k.png';
import contentImage from '@/assets/home/content.png';
import contentSmallImage from '@/assets/home/content-small.png';

export default function Home() {
  return (
    <Border>
      <motion.div
        initial={{
          opacity: 0,
          x: '50vw',
        }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', duration: 0.5 }}
      >
        <section className="space-y-6 px-8 mb-10 mt-14 ">
          <Typography tag="h1" className="text-center">
            How{' '}
            <span className="relative after:content-[''] after:bg-burst-top after:bg-no-repeat after:bg-contain after:absolute after:h-[30px] after:left-0 after:right-0 after:top-[-25px] after:block">
              effective
            </span>{' '}
            is your content strategy organization?
          </Typography>
          <Image src={heroImage} alt="" className="mx-auto" />
          <p>
            We’ve created a Content Maturity Assessment to help you answer that
            question.
          </p>
          <ButtonTakeQuiz url="/two">Take the quiz</ButtonTakeQuiz>
          <hr className="!mt-14 border-t-0 border-b border-solid border-gold" />
        </section>

        <section className="space-y-8 mb-10 px-8">
          <Typography tag="h2">
            Let’s talk about{' '}
            <span className="relative after:content-[''] after:bg-oval after:bg-no-repeat after:bg-contain after:absolute  after:block after:-inset-x-3 after:-top-6 after:-bottom-8 after:-left-2 after:-z-[1]">
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
        </section>

        <section className="bg-beige bg-question-marks bg-300 bg-right space-y-8 px-8 py-10">
          <Typography tag="h2">Why take this quiz?</Typography>
          <p>
            Our quiz dives into how an organization manages its content, from
            planning and creation to distribution and measurement. We'll
            evaluate your responses and identify opportunities for improvement,
            enabling you to level up your organizational content strategy.
          </p>
          <ButtonTakeQuiz url="/two">Take the quiz</ButtonTakeQuiz>
        </section>

        <section className="space-y-8 py-10 px-8">
          <Image src={quizByImage} alt="" />
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
              'py-3 px-4 block w-full',
              'md:pt-5 md:pb-5 md:px-10'
            )}
          >
            Let's connect
          </a>
        </section>
      </motion.div>
    </Border>
  );
}
