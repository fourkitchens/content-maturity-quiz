'use client';

import { motion } from 'framer-motion';
/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Image from 'next/image';
import Border from '@/components/Border';
import ButtonTakeQuiz from '@/components/ButtonTakeQuiz';
import Typography from '@/components/Typography';
import heroImage from '@/assets/home/hero.png';
import spiralImage from '@/assets/home/spiral.svg';
import quizByImage from '@/assets/home/quiz-by-4k.png';

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
        <section className="space-y-4 pb-10 border-b border-solid border-gold mb-10 mt-14">
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
        </section>

        <section className="space-y-8 mb-10">
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
          <Typography tag="h3">
            It should go without saying, but the better your content strategy
            practices, the better your content.
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

        <section className="bg-beige bg-question-marks bg-300 bg-right space-y-8 left-1/2 right-1/2 w-screen max-w-[100vw] relative mx-[-50vw] p-10 md:p-12">
          <Typography tag="h2">Why take this quiz?</Typography>
          <p>
            Our quiz dives into how an organization manages its content, from
            planning and creation to distribution and measurement. We'll
            evaluate your responses and identify opportunities for improvement,
            enabling you to level up your organizational content strategy.
          </p>
          <ButtonTakeQuiz url="/two">Take the quiz</ButtonTakeQuiz>
        </section>

        <section>
          <Image src={quizByImage} alt="" />
          <Typography tag="h2">
            Quiz by Four Kitchens. We make websites with love. For good
          </Typography>
        </section>
      </motion.div>
    </Border>
  );
}
