'use client';

/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Layout from '@/components/Layout';
import q from '@/data/questions.json';
import QuestionLayout from '@/components/QuestionLayout';
import image from '@/assets/illustrations3.svg';

export default function Page() {
  return (
    <Layout>
      <QuestionLayout data={q.questions[0][2]} currentID={2} image={image} />
    </Layout>
  );
}
