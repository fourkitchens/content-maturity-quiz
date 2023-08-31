'use client';

/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Layout from '@/components/Layout';
import Typography from '@/components/Typography';
import ProgressTracker from '@/components/ProgressTracker';
import Pagination from '@/components/Pagination';

export default function Page() {
  return (
    <Layout>
      <div>
        <div className="prose lg:max-w-[750px] mx-auto">
          <ProgressTracker count={10} currentID={5} />
          <Pagination currentID={5} />
          <Typography tag="h3" className="mt-10 mb-6">
            Page 6
          </Typography>
        </div>
      </div>
    </Layout>
  );
}
