/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import PropTypes from 'prop-types';
import Email1 from '@/emails/level1';
import Email2 from '@/emails/level2';
import Email3 from '@/emails/level3';
import Email4 from '@/emails/level4';
import Email5 from '@/emails/level5';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const Email = ({ resultsLevel }) => {
  if (resultsLevel === 1) {
    return <Email1 />;
  }
  if (resultsLevel === 2) {
    return <Email2 />;
  }
  if (resultsLevel === 3) {
    return <Email3 />;
  }
  if (resultsLevel === 4) {
    return <Email4 />;
  }
  if (resultsLevel === 5) {
    return <Email5 />;
  }

  return null;
};

Email.propTypes = {
  resultsLevel: PropTypes.number.isRequired,
};

export async function POST(req = NextRequest) {
  const { email, resultsLevel } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Content Strategy Quiz <results@contentstrategyquiz.com>',
      to: [email],
      subject: 'Content Strategy Quiz Results',
      react: <Email resultsLevel={resultsLevel} />,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
