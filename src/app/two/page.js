'use client';

import { motion } from 'framer-motion';
/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Border from '@/components/Border';
import Button from '@/components/ButtonTakeQuiz';

export default function Two() {
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
        <div className="prose">
          <h1>This is page 2!</h1>
          <h3>
            It should go without saying, but the better your content strategy
            practices, the better your content.{' '}
          </h3>
          <p className="lead">
            We’ve created a Content Maturity Assessment to help you answer that
            question.
          </p>
          <p>
            Your website is how you tell your story, achieve your goals, and
            make a difference. So, how do you protect your investment and ensure
            the content on your website works for your organization rather than
            against it?
          </p>
          <Button url="/">Back to Page 1</Button>
        </div>
      </motion.div>
    </Border>
  );
}
