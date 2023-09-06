'use client';

/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Layout from '@/components/Layout';
import q from '@/data/questions.json';
import QuestionLayout from '@/components/QuestionLayout';

export default function Page() {
  return (
    <Layout>
      <QuestionLayout data={q.questions[0][8]} currentID={8} columns={2} />
    </Layout>
  );
}
