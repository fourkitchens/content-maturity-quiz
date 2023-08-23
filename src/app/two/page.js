'use client';

/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Layout from '@/components/Layout';
import CheckboxList from '@/components/CheckboxList';
import q from '@/data/questions.json';
import Typography from '@/components/Typography';
import ProgressTracker from '@/components/ProgressTracker';

export default function Two() {
  return (
    <Layout>
      <div>
        <div className="prose lg:max-w-[750px] mx-auto">
          <ProgressTracker count={10} currentID={3} />
          <Typography tag="h3" className="mt-10 mb-6">
            Checkboxes that only allow you to select only one.
          </Typography>

          <CheckboxList data={q.questions[0][0]} />

          <Typography tag="h3" className="mt-10 mb-6">
            Select as many checkboxes as you like.
          </Typography>
          <CheckboxList data={q.questions[0][1]} />
        </div>
      </div>
    </Layout>
  );
}
