'use client';

/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Layout from '@/components/Layout';
import q from '@/data/questions.json';
import QuestionLayout from '@/components/QuestionLayout';

export default function Page() {
  return (
    <Layout>
      <QuestionLayout data={q.questions[0][9]} currentID={9} columns={2} />
    </Layout>
  );
}
