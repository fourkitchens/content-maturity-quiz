'use client';

import { motion } from 'framer-motion';
/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="prose">
          <h1>How effective is your content strategy organization?</h1>
          <h2>Let’s talk about Content</h2>
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
        </div>
      </motion.div>
    </Layout>
  );
}
