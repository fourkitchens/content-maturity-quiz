'use client';

import { motion } from 'framer-motion';
/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Layout from '@/components/Layout';

export default function Two() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Page Two
      </motion.div>
    </Layout>
  );
}
