'use client';

/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Layout from '@/components/Layout';
import QuestionLayout from '@/components/QuestionLayout';
import image from '@/assets/illustrations7.svg';

export default function Page() {
  return (
    <Layout>
      <QuestionLayout currentID={6} image={image} />
    </Layout>
  );
}
