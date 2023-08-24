'use client';

/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Link from 'next/link';
import Layout from '@/components/Layout';
import CheckboxList from '@/components/CheckboxList';
import q from '@/data/questions.json';
import Typography from '@/components/Typography';
import ProgressTracker from '@/components/ProgressTracker';

export default function One() {
  return (
    <Layout>
      <div>
        <div className="prose lg:max-w-[750px] mx-auto">
          <ProgressTracker currentID={7} />
          <ul className="flex flex-row gap-4 mx-auto my-10 p-0 justify-center">
            <li>
              <Link href="/" className="text-blue-500 underline">
                ← Previous
              </Link>
            </li>
            <li>
              <Link href="/2" className="text-blue-500 underline">
                Next →
              </Link>
            </li>
          </ul>
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
