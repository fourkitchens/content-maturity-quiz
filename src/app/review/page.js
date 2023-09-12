'use client';

/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Link from 'next/link';
import Layout from '@/components/Layout';
import Typography from '@/components/Typography';
import Section from '@/components/Section';

const pageList = [
  {
    title: 'Homepage',
    url: '/',
  },
  {
    title: 'Question 1',
    url: '/1',
  },
  {
    title: 'Question 2',
    url: '/2',
  },
  {
    title: 'Question 3',
    url: '/3',
  },
  {
    title: 'Question 4',
    url: '/4',
  },
  {
    title: 'Question 5',
    url: '/5',
  },
  {
    title: 'Question 7',
    url: '/7',
  },
  {
    title: 'Question 8',
    url: '/8',
  },
  {
    title: 'Question 9',
    url: '/9',
  },
  {
    title: 'Question 10',
    url: '/10',
  },
  {
    title: 'Results',
    url: '/results',
  },
];

export default function Page() {
  return (
    <Layout>
      <Section>
        <Typography tag="h1" className="text-center">
          Let's{' '}
          <span className="relative after:content-[''] after:bg-burst-top after:bg-no-repeat after:bg-contain after:absolute after:h-[30px] after:left-0 after:right-0 after:top-[-25px] after:block sm:after:h-[35px] sm:after:left-2 sm:after:top-[-35px]">
            review
          </span>{' '}
          the project!
        </Typography>
        <Typography tag="h2">List of pages</Typography>
        <ul>
          {pageList.map((page, i) => (
            <li key={i}>
              <Link href={page.url} className="text-green underline">
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </Layout>
  );
}
