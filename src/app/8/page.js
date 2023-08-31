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
          <ProgressTracker count={10} currentID={7} />
          <Pagination currentID={7} />
          <Typography tag="h3" className="mt-10 mb-6">
            Page 8
          </Typography>
        </div>
      </div>
    </Layout>
  );
}
