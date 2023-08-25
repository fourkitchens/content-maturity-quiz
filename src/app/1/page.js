'use client';

/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Layout from '@/components/Layout';
import CheckboxList from '@/components/CheckboxList';
import q from '@/data/questions.json';
import Typography from '@/components/Typography';
import ProgressTracker from '@/components/ProgressTracker';
import Pagination from '@/components/Pagination';

export default function One() {
  return (
    <Layout>
      <div>
        <div className="prose lg:max-w-[750px] mx-auto">
          <ProgressTracker currentID={0} />
          <Pagination currentID={0} />
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