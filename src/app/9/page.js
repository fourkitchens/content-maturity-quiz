'use client';

/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Layout from '@/components/Layout';
import QuestionLayout from '@/components/QuestionLayout';

export default function Page() {
  return (
    <Layout>
      <QuestionLayout currentID={8} columns />
    </Layout>
  );
}
