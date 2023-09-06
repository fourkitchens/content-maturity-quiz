'use client';

/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Layout from '@/components/Layout';
import q from '@/data/questions.json';
import QuestionLayout from '@/components/QuestionLayout';
import image from '@/assets/illustrations8.svg';

export default function Page() {
  return (
    <Layout>
      <QuestionLayout data={q.questions[0][2]} currentID={7} image={image} />
    </Layout>
  );
}
